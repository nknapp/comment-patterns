module.exports = {
    name: "C++",
    nameMatchers: [".cpp", ".hpp", ".c++", ".h++", ".cc", ".hh", ".cxx", ".hxx"],
    multiLineComment: require("./c.js").multiLineComment,
    singleLineComment: require("./c.js").singleLineComment
};
