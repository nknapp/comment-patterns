var patterns = require("../");
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

  it("should provide a regex that matches a single-line-comment", function () {
    var r = patterns.regex("test.js");
    var match = r.regex.exec("// line 1\n// line 2\ncode\n");
    match[r.cg.indent].should.eql("");
    match[r.cg.wholeComment].should.eql("// line 1\n// line 2\n");
    should.not.exist(match[r.cg.contentStart]);
    match[r.cg.contentStart + 1].should.eql("// line 1\n// line 2\n");
  });

  it("should provide a regex that matches a single-line-comment with indent", function () {
    var r = patterns.regex("test.js");
    var match = r.regex.exec(" // line 1\n // line 2\n code\n");
    match[r.cg.indent].should.eql(" ");
    match[r.cg.wholeComment].should.eql("// line 1\n // line 2\n");
    should.not.exist(match[r.cg.contentStart]);
    match[r.cg.contentStart + 1].should.eql("// line 1\n // line 2\n");
  });
});

describe("comment-patterns.codeContext", function () {
  it("should regognize a function in a js-string", function () {
    var codeContext = patterns.codeContext("test.js");
    var result = codeContext.detect("function name(param1, param2)", 2);
    result.should.eql({
      begin: 2,
      name: 'name',
      original: 'function name(param1, param2)',
      params: ['param1', 'param2'],
      string: 'name()',
      type: 'function statement'
    });
  })

  it("should throw an error, if no code-context parser is defined for the language", function () {
    try {
      patterns.codeContext("test.scss"); // non existing languauge
    } catch (e) {
      e.message.should.equal("Cannot find module './languages/code-context/scss.js'");
    }
  });
});

