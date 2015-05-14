module.exports = {
    name: "Objective-C",
    nameMatchers: [".m", ".mm"],
    multiLineComment: [{
        start: /\/\*\*?/,
        middle: "*",
        end: "*/"
    }],
    singleLineComment: ["//"]
};
