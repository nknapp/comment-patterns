var path = require("path");
var db = require("./lang-db/lang.js");
var _ = require("lodash");

/**
 * Load the comment-pattern for a given file.
 * The file-language is determined by the file-extension.
 * @param {string} `filename` the name of the file
 * @returns {object} the comment-patterns
 * @api public
 */
function commentPattern(filename) {
    var ext = path.extname(filename);
    var result = _.find(db, function (item) {
        return _.any(item.nameMatchers, function (matcher) {
            if (_.isRegExp(matcher)) {
                return ext.match(matcher);
            } else if (_.isString(matcher)) {
                return ext === matcher;
            }
        });
    });
    // Convert 3-tuples for multi-line-comments from groc-format into a
    // more readble object representation
    var newMultiLineComment = [];
    for (var i = 0; i < result.multiLineComment.length; i += 3) {
        newMultiLineComment.push({
            start: result.multiLineComment[i + 0],
            middle: result.multiLineComment[i + 1],
            end: result.multiLineComment[i + 2]
        });
    }
    result.multiLineComment = newMultiLineComment;
    return result;
}

module.exports = commentPattern;
