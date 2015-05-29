## The database

These are the base entries (no variations) of the database:


### C
```js
{
  srcFile: "c.js",
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
  srcFile: "clojure.js",
  name: "Clojure",
  nameMatchers: [".clj", ".cljs"],
  singleLineComment: [";;"]
}
```


### CoffeeScript
```js
{
  srcFile: "coffeescript.js",
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
  srcFile: "cplusplus.js",
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
  srcFile: "csharp.js",
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
  srcFile: "css.js",
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
  srcFile: "go.js",
  name: "Go",
  nameMatchers: [".go"],
  singleLineComment: ["//"]
}
```


### Handlebars
```js
{
  srcFile: "handlebars.js",
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
  srcFile: "haskell.js",
  name: "Haskell",
  nameMatchers: [".hs"],
  singleLineComment: ["--"]
}
```


### HTML
```js
{
  srcFile: "html.js",
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
  srcFile: "jade.js",
  name: "Jade",
  nameMatchers: [".jade"],
  singleLineComment: ["//", "//-"]
}
```


### Jake
```js
{
  srcFile: "jake.js",
  name: "Jake",
  nameMatchers: [".jake"],
  singleLineComment: ["//"]
}
```


### Java
```js
{
  srcFile: "java.js",
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
  srcFile: "javascript.js",
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
  srcFile: "json.js",
  name: "JSON",
  nameMatchers: [".json"]
}
```


### JSP
```js
{
  srcFile: "jsp.js",
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
  srcFile: "latex.js",
  name: "LaTeX",
  nameMatchers: [".tex", ".latex", ".sty"],
  singleLineComment: ["%"]
}
```


### LESS
```js
{
  srcFile: "less.js",
  name: "LESS",
  nameMatchers: [".less"],
  singleLineComment: ["//"],
  multiLineComment: [{
    start: /\/\*\*?/,
    middle: "*",
    end: "*/"
  }]
}
```


### LiveScript
```js
{
  srcFile: "livescript.js",
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
  srcFile: "lua.js",
  name: "Lua",
  nameMatchers: [".lua"],
  singleLineComment: ["--"]
}
```


### Make
```js
{
  srcFile: "make.js",
  name: "Make",
  nameMatchers: ["Makefile"],
  singleLineComment: ["#"]
}
```


### Markdown
```js
{
  srcFile: "markdown.js",
  name: "Markdown",
  nameMatchers: [".md", ".markdown", ".mkd", ".mkdn", ".mdown"],
  commentsOnly: true
}
```


### Mustache
```js
{
  srcFile: "mustache.js",
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
  srcFile: "objective-c.js",
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
  srcFile: "perl.js",
  name: "Perl",
  nameMatchers: [".pl", ".pm"],
  singleLineComment: ["#"]
}
```


### PHP
```js
{
  srcFile: "php.js",
  name: "PHP",
  nameMatchers: [".php", ".php3", ".php4", ".php5", ".fbp"],
  singleLineComment: ["//"]
}
```


### Puppet
```js
{
  srcFile: "puppet.js",
  name: "Puppet",
  nameMatchers: [".pp"],
  singleLineComment: ["#"]
}
```


### Python
```js
{
  srcFile: "python.js",
  name: "Python",
  nameMatchers: [".py"],
  singleLineComment: ["#"]
}
```


### Ruby
```js
{
  srcFile: "ruby.js",
  name: "Ruby",
  nameMatchers: [".rb", ".ru", ".gemspec"],
  singleLineComment: ["#"]
}
```


### Sass
```js
{
  srcFile: "sass.js",
  name: "Sass",
  nameMatchers: [".sass"],
  singleLineComment: ["//"]
}
```


### SCSS
```js
{
  srcFile: "scss.js",
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
  srcFile: "shell.js",
  name: "Shell",
  nameMatchers: [".sh", ".bash"],
  singleLineComment: ["#"]
}
```


### SQL
```js
{
  srcFile: "sql.js",
  name: "SQL",
  nameMatchers: [".sql"],
  singleLineComment: ["--"]
}
```


### Swift
```js
{
  srcFile: "swift.js",
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
  srcFile: "typescript.js",
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
  srcFile: "yaml.js",
  name: "YAML",
  nameMatchers: [".yml", ".yaml"],
  singleLineComment: ["#"]
}
```


