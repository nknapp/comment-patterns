module.exports = {
    name: "CSharp",
    nameMatchers: [".cs"],
    multiLineComment: require("./c.js").multiLineComment,
    singleLineComment: require("./c.js").singleLineComment
};
