module.exports = {
    name: "SCSS",
    nameMatchers: [".scss"],
    multiLineComment: [{
        start: /\/\*\*?/,
        middle: "*",
        end: "*/"
    }],
    singleLineComment: ["//"]
};
