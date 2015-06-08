# Change Log

This project adheres to [Semantic Versioning](http://semver.org/).

## Upcoming
### Add
- Add function `.codeContext` to return code-context parser for different languages.

## v0.5.2 - 2015-05-27
### Add
- Multi-line-comments for Less

## v0.5.1 - 2015-05-24
### Add
- Add `.bash` as file-extension for shell-scripts.

## v0.5.0 - 2015-05-20
### Fix
- Remove "function()" from generated database files. This lead to an error in the test cases.

## v0.4.0 - 2015-05-20
### Fix
- Consecutive indented lines of single-line-comments are now recognized 
  as a single comment by regexes
-

## v0.3.0 - 2015-05-15
### Changed
- Next-line-of-code is not matched anymode. The client has to extract the code itself.
  The line-number is still computed.


## v0.2.0 - 2015-05-14
### Changed
- Some comment delimiters are now regexes rather than strings
- Middle-prefix for C-like languages now allows a preceeding whitespace.

### Added
- Method `.regex` creates regular expressions that match comments

## v0.1.0 - 2015-05-04
### Changed
- Only strings are used to determine that language from the file extension
  `/php\d?/` is replaced by `php`,`php3`,...


## v0.0.x 
### Initial version
