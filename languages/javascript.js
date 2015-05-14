module.exports = {
    name: "JavaScript",
    nameMatchers: [".js"],
    multiLineComment: [{
        start: /\/\*\*?/,
        middle: "*",
        end: "*/"
    }],
    singleLineComment: ["//"]
};
