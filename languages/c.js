module.exports = {
    name: "C",
    nameMatchers: [".c", ".h"],
    multiLineComment: [{
        start: /\/\*\*?/,
        middle: / ?\*/,
        end: "*/"
    }],
    singleLineComment: ["//"]
};
