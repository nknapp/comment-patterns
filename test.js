var patterns = require("./");
var should = require('should');

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
                    {start: /\/\*\*?/, middle: '*', end: '*/'}
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
                    {start: /\/\*\*?/, middle: '*', end: '*/'}
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

describe("comment-patterns.regex", function () {
    it("should provide a regex that matches a multi-line-comment", function () {
        var r = patterns.regex("test.js");
        var match = r.regex.exec(" /**\n  * Test\n  */\ncode\n");
        match[r.cg.indent].should.eql(" ");
        match[r.cg.wholeComment].should.eql("/**\n  * Test\n  */");
        match[r.cg.contentStart].should.eql("\n  * Test\n  ");
        should.not.exist(match[r.cg.contentStart + 1]);
    });

    it("should provide a regex that matches a single-line-comment", function() {
        var r = patterns.regex("test.js");
        var match = r.regex.exec("// line 1\n// line 2\ncode\n");
        match[r.cg.indent].should.eql("");
        match[r.cg.wholeComment].should.eql("// line 1\n// line 2\n");
        should.not.exist(match[r.cg.contentStart]);
        match[r.cg.contentStart+1].should.eql("// line 1\n// line 2\n");
    });

    it("should provide a regex that matches a single-line-comment with indent", function() {
        var r = patterns.regex("test.js");
        var match = r.regex.exec(" // line 1\n // line 2\n code\n");
        match[r.cg.indent].should.eql(" ");
        match[r.cg.wholeComment].should.eql("// line 1\n // line 2\n");
        should.not.exist(match[r.cg.contentStart]);
        match[r.cg.contentStart+1].should.eql("// line 1\n // line 2\n");
    });
});


