module.exports = {
    name: "LiveScript",
    nameMatchers: [".ls", "Slakefile"],
    multiLineComment: [{
        start: /\/\*\*?/,
        middle: "*",
        end: "*/"
    }],
    singleLineComment: ["#"]
};
