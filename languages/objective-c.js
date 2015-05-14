module.exports = {
    name: "Objective-C",
    nameMatchers: [".m", ".mm"],
    multiLineComment: require("./c.js").multiLineComment,
    singleLineComment: require("./c.js").singleLineComment
};
