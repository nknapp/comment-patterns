var verb = require('verb');
var literal = require("json-literal");
var commentPatterns = require("./");
var esformatter = require('esformatter');

/**
 * Pretty print an object as javascript-source code.
 * @param {object} `obj` the javascript object
 * @returns {string} a pretty printed markdown code-block
 */
function stringify(obj) {
    var formatted = esformatter.format(literal.stringify(obj), {
        indent: {
            value: '  '
        }
    });
    return "```js\n"
        + formatted.replace(/^\(([\s\S]*)\)$/, "$1")
        + "\n```\n";
}

// load data for templates if needed
verb.data({"langDB": require("./db-generated/base.js")});

/**
 * Helper to call the base function of this module
 */
verb.helper('commentPatterns', function (filename) {
    return stringify(commentPatterns(filename));
});

/**
 * Helper to call the .regex-function of this module
 */
verb.helper('commentPatterns_regex', function (filename) {
    return stringify(commentPatterns.regex(filename));
});

/**
 * Helper to write a pretty-printed javascript-source of an object
 */
verb.helper('literal', stringify);

verb.task('readme', function () {
    verb.src(['.verb.md'])
        .pipe(verb.dest('./'));

});

verb.task('docs', function () {
    verb.src(['.docs/*.md'])
        .pipe(verb.dest('./docs/'));
});

verb.task('default',['readme','docs']);
