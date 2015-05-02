
{% _.forEach(langDB, function(lang) { %}
### {%= lang.name %}

* Name-Matchers: {% _.forEach(lang.nameMatchers, function(matcher) { %} `{%= matcher.toString() %}` {% }); %}
{% _.forEach(lang.multiLineComment, function(mlc) { %}
* Multi-line comment: `{%= mlc.start %}`, ` {%= mlc.middle %}`, `{%= mlc.end %}`
{% }); %}
{% _.forEach(lang.singleLineComment, function(slc) { %}
* Single-line comment: `{%= slc%}`
{% }); %}
{% if (lang.commentsOnly) { %}
* File only consists of comments
{% } %}
{% }); %}
