module.exports = {
    name: "Java",
    nameMatchers: [".java"],
    multiLineComment: require("./c.js").multiLineComment,
    singleLineComment: require("./c.js").singleLineComment
};
