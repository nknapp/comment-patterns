var verb = require('verb');

// load data for templates if needed
verb.data({ "langDB": require("./lang-db/lang.js")});

verb.task('default', function() {
    verb.src(['.verb.md', 'docs/*.md'])
        .pipe(verb.dest('./'));
});
