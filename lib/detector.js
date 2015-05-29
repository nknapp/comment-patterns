/*!
 * multilang-code-context <https://github.com/nknapp/multilang-code-context>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */
var _ = require("lodash");

/**
 * Create a new detector.
 * @param {function(string)} parsers
 * @constructor
 */
function Detector(parsers) {

  /**
   * Creates an extended Detector with all parsers
   * @param {function(string)} moreParsers more parsers
   * @returns {Detector} a new Detector instance
   */
  this.extend = function (moreParsers) {
    return new Detector(parsers.concat(moreParsers));
  }

  this.detect = function (string, lineNr) {
    // Execute all parsers on after each other.
    // Return the first non-null result.
    for (var i = 0; i < parsers.length; i++) {
      var result = parsers[i](string, lineNr);
      if (result) {
        return _.merge(
          {
            begin: lineNr
          },
          result
        );
      }
    }
    return _.find(parsers, function (parser) {
      console.log(parser.toString())
      return _.merge(
        {
          begin: lineNr
        },
        parser(string, lineNr)
      );
    });
  }
}

/**
 *
 * @param {RegExp} regex a regular expression that is matched against a code-line.
 * @param {function(...string)} resolver a function that resolves the regex match into
 *   a code-context object. The function-parameters are the capturing groups of the regex
 * @return {function} a function that can be used as parser
 */
Detector.re = function (regex, resolver) {
  return function (string, i) {
    var result = string.match(regex);
    if (result) {
      return resolver.apply(this, result);
    }
    return null;
  };
}

module.exports = Detector;
