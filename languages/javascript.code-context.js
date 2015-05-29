var Detector = require("../lib/detector.js");
/**
 * Function to detect the type of a give code-line in the source file
 * (preferably the line *after* a comment)
 * @param string
 * @param i
 */
module.exports = new Detector([
  require("parse-code-context"),
  // Properties of an object  (like "name: function(param1,paramw
  Detector.re(/[ \t]*["']?([\w$]+)["']?[ \t]*:[ \t]*function([\w\W]+)?/, function (match) {
    return {
      begin: i,
      type: 'function expression',
      name: match[1],
      params: (match[2]).split(/\W/g).filter(Boolean),
      string: match[1] + '()',
      original: str
    }
  })
]);
