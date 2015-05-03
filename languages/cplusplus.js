module.exports = {
  name: "C++",
  nameMatchers: [".cpp", ".hpp", ".c++", ".h++", ".cc", ".hh", ".cxx", ".hxx"],
  multiLineComment: [{
    start: "/*",
    middle: "*",
    end: "*/"
  }],
  singleLineComment: ["//"]
};