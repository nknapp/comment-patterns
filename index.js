var path = require("path");
var db = require("./lang-db/lang.js");
var _ = require("lodash");

/**
 * Load the comment-pattern for a given file.
 * The file-language is determined by the file-extension.
 * @param {string} filename the name of the file
 * @returns {object} the comment-patterns
 * @api public
 */
function commentPattern(filename) {
    var ext = path.extname(filename);
    return _.find(db, function (item) {
        return _.any(item.nameMatchers, function (matcher) {
            if (_.isRegExp(matcher)) {
                return ext.match(matcher);
            } else if (_.isString(matcher)) {
                return ext === matcher;
            }
        });
    });
};

module.exports = commentPattern;
