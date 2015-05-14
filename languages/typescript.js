module.exports = {
    name: "TypeScript",
    nameMatchers: [".ts"],
    multiLineComment: [{
        start: /\/\*\*?/,
        middle: "*",
        end: "*/"
    }],
    singleLineComment: ["//"]
};
