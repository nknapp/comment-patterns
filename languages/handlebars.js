module.exports = {
  name: "Handlebars",
  nameMatchers: [".handlebars", ".hbs"],
  multiLineComment: [{
    start: "<!--",
    middle: "",
    end: "-->"
  }, {
    start: "{{!",
    middle: "",
    end: "}}"
  }]
};