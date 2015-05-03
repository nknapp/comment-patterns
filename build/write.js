var esformatter = require('esformatter');
var stringify = require("json-literal").stringify;
var fs = require("fs");

/**
 * Write a javascript-object as require-able js-file
 * @param obj
 * @param file
 */
function writeJS(obj, file) {
    var node = stringify(obj).replace(/^\((.*)\)$/, "$1");
    var string = esformatter.format("module.exports = " + node + ";");
    fs.writeFileSync(
        file,
        string,
        "utf-8"
    );
}

module.exports = writeJS;
