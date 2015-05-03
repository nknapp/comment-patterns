var path = require("path");
var _ = require("lodash");
var base = require("./db-generated/base.js");
var byMatcher = require("./db-generated/by-matcher.js");

/**
 * Load the comment-pattern for a given file.
 * The file-language is determined by the file-extension.
 * @param {string} `filename` the name of the file
 * @returns {object} the comment-patterns
 * @api public
 */
function commentPattern(filename) {
    // Look for whole filename and for extension ("Makefile" is not an extesion,
    // but should be matched to the appropriate file
    var index = byMatcher[filename];
    if (_.isUndefined(index)) {
        index = byMatcher[path.extname(filename)];
    }
    if (_.isUndefined(index)) {
        throw new Error("Cannot find language definition for '" + filename + "'");
    }
    return _.cloneDeep(base[index]);
}

module.exports = commentPattern;
