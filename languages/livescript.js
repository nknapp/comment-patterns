module.exports = {
    name: "LiveScript",
    nameMatchers: [".ls", "Slakefile"],
    multiLineComment: require("./c.js").multiLineComment,
    singleLineComment: ["#"]
};
