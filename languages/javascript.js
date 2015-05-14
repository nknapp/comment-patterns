module.exports = {
    name: "JavaScript",
    nameMatchers: [".js"],
    multiLineComment: require("./c.js").multiLineComment,
    singleLineComment: require("./c.js").singleLineComment
};
