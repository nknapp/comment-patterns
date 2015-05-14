module.exports = {
    name: "CSharp",
    nameMatchers: [".cs"],
    multiLineComment: [{
        start: /\/\*\*?/,
        middle: "*",
        end: "*/"
    }],
    singleLineComment: ["//"]
};
