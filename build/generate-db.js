var path = require("path");
var fs = require("fs");
var writeJS = require("./write");


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
var databaseDir = path.resolve(__dirname,"..","db-generated");
if (!fs.existsSync(databaseDir)) {
    fs.mkdir(databaseDir);
}
writeJS(languages,path.join(databaseDir,"base.js"));


// Generate indexes ( obj from name and file-extension to index of language-entry in the database)
var byName = {};
var byFilenameMatcher = {};
languages.forEach(function(lang, index) {
    byName[lang.name] = index;
    lang.nameMatchers.forEach(function(matcher) {
        byFilenameMatcher[matcher] = index;
    });
});

writeJS(byName,path.join(databaseDir,"by-name.js"));
writeJS(byFilenameMatcher,path.join(databaseDir,"by-matcher.js"));
