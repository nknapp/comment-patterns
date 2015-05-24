## The database

These are the base entries (no variations) of the database:


### C
```js
{
  name: "C",
  nameMatchers: [".c", ".h"],
  multiLineComment: [{
    start: /\/\*\*?/,
    middle: "*",
    end: "*/"
  }],
  singleLineComment: ["//"]
}
```


### Clojure
```js
{
  name: "Clojure",
  nameMatchers: [".clj", ".cljs"],
  singleLineComment: [";;"]
}
```


### CoffeeScript
```js
{
  name: "CoffeeScript",
  nameMatchers: [".coffee", "Cakefile"],
  multiLineComment: [{
    start: "###*",
    middle: / \*|#/,
    end: "###"
  }, {
    start: "###",
    middle: "#",
    end: "###"
  }],
  singleLineComment: ["#"]
}
```


### C++
```js
{
  name: "C++",
  nameMatchers: [".cpp", ".hpp", ".c++", ".h++", ".cc", ".hh", ".cxx", ".hxx"],
  multiLineComment: [{
    start: /\/\*\*?/,
    middle: "*",
    end: "*/"
  }],
  singleLineComment: ["//"]
}
```


### CSharp
```js
{
  name: "CSharp",
  nameMatchers: [".cs"],
  multiLineComment: [{
    start: /\/\*\*?/,
    middle: "*",
    end: "*/"
  }],
  singleLineComment: ["//"]
}
```


### CSS
```js
{
  name: "CSS",
  nameMatchers: [".css"],
  multiLineComment: [{
    start: /\/\*\*?/,
    middle: "*",
    end: "*/"
  }]
}
```


### Go
```js
{
  name: "Go",
  nameMatchers: [".go"],
  singleLineComment: ["//"]
}
```


### Handlebars
```js
{
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
}
```


### Haskell
```js
{
  name: "Haskell",
  nameMatchers: [".hs"],
  singleLineComment: ["--"]
}
```


### HTML
```js
{
  name: "HTML",
  nameMatchers: [".htm", ".html"],
  multiLineComment: [{
    start: "<!--",
    middle: "",
    end: "-->"
  }]
}
```


### Jade
```js
{
  name: "Jade",
  nameMatchers: [".jade"],
  singleLineComment: ["//", "//-"]
}
```


### Jake
```js
{
  name: "Jake",
  nameMatchers: [".jake"],
  singleLineComment: ["//"]
}
```


### Java
```js
{
  name: "Java",
  nameMatchers: [".java"],
  multiLineComment: [{
    start: /\/\*\*?/,
    middle: "*",
    end: "*/"
  }],
  singleLineComment: ["//"]
}
```


### JavaScript
```js
{
  name: "JavaScript",
  nameMatchers: [".js"],
  multiLineComment: [{
    start: /\/\*\*?/,
    middle: "*",
    end: "*/"
  }],
  singleLineComment: ["//"]
}
```


### JSON
```js
{
  name: "JSON",
  nameMatchers: [".json"]
}
```


### JSP
```js
{
  name: "JSP",
  nameMatchers: [".jsp"],
  multiLineComment: [{
    start: "<!--",
    middle: "",
    end: "-->"
  }, {
    start: "<%--",
    middle: "",
    end: "--%>"
  }]
}
```


### LaTeX
```js
{
  name: "LaTeX",
  nameMatchers: [".tex", ".latex", ".sty"],
  singleLineComment: ["%"]
}
```


### LESS
```js
{
  name: "LESS",
  nameMatchers: [".less"],
  singleLineComment: ["//"]
}
```


### LiveScript
```js
{
  name: "LiveScript",
  nameMatchers: [".ls", "Slakefile"],
  multiLineComment: [{
    start: /\/\*\*?/,
    middle: "*",
    end: "*/"
  }],
  singleLineComment: ["#"]
}
```


### Lua
```js
{
  name: "Lua",
  nameMatchers: [".lua"],
  singleLineComment: ["--"]
}
```


### Make
```js
{
  name: "Make",
  nameMatchers: ["Makefile"],
  singleLineComment: ["#"]
}
```


### Markdown
```js
{
  name: "Markdown",
  nameMatchers: [".md", ".markdown", ".mkd", ".mkdn", ".mdown"],
  commentsOnly: true
}
```


### Mustache
```js
{
  name: "Mustache",
  nameMatchers: [".mustache"],
  multiLineComment: [{
    start: "{{!",
    middle: "",
    end: "}}"
  }]
}
```


### Objective-C
```js
{
  name: "Objective-C",
  nameMatchers: [".m", ".mm"],
  multiLineComment: [{
    start: /\/\*\*?/,
    middle: "*",
    end: "*/"
  }],
  singleLineComment: ["//"]
}
```


### Perl
```js
{
  name: "Perl",
  nameMatchers: [".pl", ".pm"],
  singleLineComment: ["#"]
}
```


### PHP
```js
{
  name: "PHP",
  nameMatchers: [".php", ".php3", ".php4", ".php5", ".fbp"],
  singleLineComment: ["//"]
}
```


### Puppet
```js
{
  name: "Puppet",
  nameMatchers: [".pp"],
  singleLineComment: ["#"]
}
```


### Python
```js
{
  name: "Python",
  nameMatchers: [".py"],
  singleLineComment: ["#"]
}
```


### Ruby
```js
{
  name: "Ruby",
  nameMatchers: [".rb", ".ru", ".gemspec"],
  singleLineComment: ["#"]
}
```


### Sass
```js
{
  name: "Sass",
  nameMatchers: [".sass"],
  singleLineComment: ["//"]
}
```


### SCSS
```js
{
  name: "SCSS",
  nameMatchers: [".scss"],
  multiLineComment: [{
    start: /\/\*\*?/,
    middle: "*",
    end: "*/"
  }],
  singleLineComment: ["//"]
}
```


### Shell
```js
{
  name: "Shell",
  nameMatchers: [".sh", ".bash"],
  singleLineComment: ["#"]
}
```


### SQL
```js
{
  name: "SQL",
  nameMatchers: [".sql"],
  singleLineComment: ["--"]
}
```


### Swift
```js
{
  name: "Swift",
  nameMatchers: [".swift"],
  multiLineComment: [{
    start: /\/\*\*?/,
    middle: "*",
    end: "*/"
  }],
  singleLineComment: ["//"]
}
```


### TypeScript
```js
{
  name: "TypeScript",
  nameMatchers: [".ts"],
  multiLineComment: [{
    start: /\/\*\*?/,
    middle: "*",
    end: "*/"
  }],
  singleLineComment: ["//"]
}
```


### YAML
```js
{
  name: "YAML",
  nameMatchers: [".yml", ".yaml"],
  singleLineComment: ["#"]
}
```


