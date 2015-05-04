var esformatter = require('esformatter');
var stringify = require("json-literal").stringify;
var fs = require("fs");

/**
 * Write a javascript-object as require-able js-file
 * @param obj
 * @param file
 * @param {boolean} `pretty` pretty-print js with esformmatter if true
 */
function writeJS(obj, file,pretty) {
    var node = stringify(obj).replace(/^\((.*)\)$/, "$1");
    var string = "module.exports = " + node + ";";
    if (pretty) {
        string = esformatter.format(string);
    }
    console.log("Writing ",file);
    fs.writeFileSync(
        file,
        string,
        "utf-8"
    );
    console.log("done");
}

module.exports = writeJS;
