var path = require("path");
var db = require("./lang-db/lang.js");
var _ = require("lodash");

module.exports.byFileName = function (filename) {
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