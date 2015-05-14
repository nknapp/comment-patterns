module.exports = {
    name: "SCSS",
    nameMatchers: [".scss"],
    multiLineComment: require("./c.js").multiLineComment,
    singleLineComment: require("./c.js").singleLineComment
};
