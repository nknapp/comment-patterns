module.exports = {
    name: "TypeScript",
    nameMatchers: [".ts"],
    multiLineComment: require("./c.js").multiLineComment,
    singleLineComment: require("./c.js").singleLineComment
};
