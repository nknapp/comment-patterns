var patterns = require("./");
require('should');

describe("comment-patterns", function () {
    it("should return the Handlebars-patterns for .hbs-files", function () {
        patterns("test.hbs").should.eql(
            {
                name: 'Handlebars',
                nameMatchers: ['.handlebars', '.hbs'],
                multiLineComment: [
                    {start: '<!--', middle: '', end: '-->'},
                    {start: '{{!', middle: '', end: '}}'}
                ]
            }
        );
    });

    it("should return the JavaScript-patterns for .js-files", function () {
        patterns("test.js").should.eql(
            {
                name: 'JavaScript',
                nameMatchers: ['.js'],
                multiLineComment: [
                    {start: '/*', middle: '*', end: '*/'}
                ],
                singleLineComment: ['//']
            }
        );
    });

    it("should return the JavaScript-patterns for .js-files, if called a second time", function () {
        patterns("test.js").should.eql(
            {
                name: 'JavaScript',
                nameMatchers: ['.js'],
                multiLineComment: [
                    {start: '/*', middle: '*', end: '*/'}
                ],
                singleLineComment: ['//']
            }
        );
    });

    it("should work for php. The regex-matcher should be replaced by string-matchers", function () {
        patterns("test.php3").should.eql(
            {
                name: 'PHP',
                nameMatchers: ['.php', '.php3', '.php4', '.php5', '.fbp'],
                singleLineComment: ['//']
            }
        );
    })

});

