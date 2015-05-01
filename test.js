var lc = require("./");
var assert = require("assert");

assert.deepEqual(
    lc("test.hbs"),
    {
        name: 'Handlebars',
        nameMatchers: ['.handlebars', '.hbs'],
        multiLineComment: ['<!--', '', '-->', '{{!', '', '}}']
    }
);
