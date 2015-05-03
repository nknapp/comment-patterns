var verb = require('verb');

// load data for templates if needed
verb.data({ "langDB": require("./db-generated/base.js")});

verb.task('default', function() {
    verb.src(['.verb.md', 'docs/*.md'])
        .pipe(verb.dest('./'));
});
