var path = require("path");
var _ = require("lodash");
var byMatcher = require("./db-generated/by-matcher.js");

/**
 * Determind the index of a language specifiation in the languages-array.
 * @param filename
 * @returns {*}
 */
var langIndex = function (filename) {
    // Look for whole filename and for extension ("Makefile" is not an extesion,
    // but should be matched to the appropriate file
    var index = byMatcher[filename];
    if (_.isUndefined(index)) {
        index = byMatcher[path.extname(filename)];
    }
    if (_.isUndefined(index)) {
        throw new Error("Cannot find language definition for '" + filename + "'");
    }
    return index;
};
/**
 * Load the comment-pattern for a given file.
 * The file-language is determined by the file-extension.
 * @param {string} `filename` the name of the file
 * @returns {object} the comment-patterns
 * @api public
 */
function commentPattern(filename) {
    var base = require("./db-generated/base.js");
    return _.cloneDeep(base[langIndex(filename)]);
}

/**
 * Load the comment-regex for a given file.
 * The result contains a regex that matches the comments
 * in the specification. It also has information about
 * which the different capturing groups of an object.
 * For example
 *
 * ```js
 * {
 *     regex: /^([ \t]*)(\/\*\*?([\s\S]*?)\*\/|((?:\/\/.*[\r\n]+)+))([\r\n]*)(.*)/gm,
 *     cg: {
 *         indent: 1,  // match[1] is the initial indent of the for comment start
 *         wholeComment: 2,  // match[2] contains the whole comment
 *         contentStart: 3,  // match[3] and the following contain the contents of the comment
 *                           // if the match[3] for multiline-comment, match[4] for single-line-comments
 *         beforeCode: 5,  // match[5] contains the newlines between the end of match[2] and match[6]
 *         code: 6  // match[6] contains the line-of-code directly following the comment.
*      },
 *     middle: [  // line-start for comment-contents in match[i - cg.contentStart]
 *         /^\* ?/gm,    // matches the line-start of comments captured in match[3]
 *         /^\/\/ ?/gm   // matches the line-start of comments captured in match[4]
 *     ],
 *     name: "C"  // the name of the language (for debugging purposes)
 * }
 * ```
 * Note that only one the groups from `cg.contentStart` to `cg.beforeCode - 1` will have a match.
 * This depends on the comment-pattern that was used in the comment.
 *
 *
 *
 * @param {string} `filename` the name of the file
 * @returns {object} an object containing regular expressions and capturing-group metadata
 * @api public
 * @name commentPattern.regex
 */
commentPattern.regex = function commentRegex(filename) {
    var regex = require("./db-generated/regexes.js");
    return _.cloneDeep(regex[langIndex(filename)]);
};


module.exports = commentPattern;
