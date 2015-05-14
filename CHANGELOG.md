# Change Log

This project adheres to [Semantic Versioning](http://semver.org/).

## Upcoming
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
