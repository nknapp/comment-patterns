var path = require("path");
var fs = require("fs");
var writeJS = require("./write");
var _ = require("lodash");

// Read the whole database into a single array
var languagesPath = path.resolve(__dirname, "..", "languages");
var langFiles = fs.readdirSync(languagesPath);
var languages = langFiles
    .filter(function (langFile) {
        return path.extname(langFile) === ".js";
    }).map(function (langFile) {
        return require(path.resolve(languagesPath, langFile));
    });

// Write generated database
var databaseDir = path.resolve(__dirname, "..", "db-generated");
if (!fs.existsSync(databaseDir)) {
    fs.mkdir(databaseDir);
}
writeJS(languages, path.join(databaseDir, "base.js"));

// Generate pre-compiled regexes to match comments
function q(regexOrString) {
    return typeof regexOrString === "string"
        ? _.escapeRegExp(regexOrString)
        : regexOrString.source
}

var regexSpec = languages.map(function (pattern) {

    // Parts of the regex that match multiline comments
    var multiLineComment = pattern.multiLineComment || [];
    var middle = [];
    var boundaries = [];
    multiLineComment.forEach(function (mlc) {
        // use [\s\S]* to match everything (including newlines)
        middle.push(new RegExp("^" + q(mlc.middle)+" ?","mg"));
        boundaries.push(q(mlc.start) + "([\\s\\S]*?)" + q(mlc.end));
    });

    // The same for single-line-comments
    var singleLineComment = pattern.singleLineComment || [];
    singleLineComment.forEach(function (slc) {
        // Single-line-patterns are taken up to the next newline,
        // but we treat multiple occurences of the pattern as a single
        // multiline-comment.
        boundaries.push("((?:" + q(slc) + ".*[\\r\\n]+)+)");
        middle.push(new RegExp("^"+q(slc)+" ?","mg"));
    });

    var regex = new RegExp(
        // Comment must start at the line`s begining (possibly indented)
        "^([ \\t]*)" +
            // This part matches the contents
        "(" + boundaries.join("|") + ")" +
            // Match trailing new-lines to determine start the start of the next code-line.
        "[\\r\\n]*"
        , "mg"
    );

    // Capturing group of the first comment-part of the regex

    // counter
    var cgi = 0;

    var cg = {
        // indent before the comment start
        indent: ++cgi,
        // the whole comment (including start-end pattern)
        wholeComment: ++cgi,
        // capture groups for the contents of the comment contents begin with this index (boundaries)
        contentStart: ++cgi
    };

    return {
        regex: regex,
        cg: cg,
        middle: middle,
        name: pattern.name
    };

});
writeJS(regexSpec, path.join(databaseDir, "regexes.js"));

// Generate indexes ( obj from name and file-extension to index of language-entry in the database)
var byName = {};
var byFilenameMatcher = {};
languages.forEach(function (lang, index) {
    byName[lang.name] = index;
    lang.nameMatchers.forEach(function (matcher) {
        byFilenameMatcher[matcher] = index;
    });
});

writeJS(byName, path.join(databaseDir, "by-name.js"));
writeJS(byFilenameMatcher, path.join(databaseDir, "by-matcher.js"));
