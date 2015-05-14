var verb = require('verb');
var literal = require("json-literal");


// load data for templates if needed
verb.data({"langDB": require("./db-generated/base.js")});

verb.helper('literal', function(string) {
    return literal.stringify(string)
        .replace(/^\((.*)\)$/, "$1");
});

verb.task('default', function () {
    verb.src(['.verb.md'])
        .pipe(verb.dest('./'));
});
