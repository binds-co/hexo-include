# hexo-include

A [Hexo](https://github.com/hexojs/hexo) plugin for including the raw content of a text file into a post directly from its markdown. Easily insert pre-written HTML, JS, or the contents of _any_ text file into the body of your post or page.

## Usage

Insert the following into the post's markdown where you want the contents of the external file inserted. All file paths are relative to your `source` directory.
```
{% includeFile 'path/to/file.bar' %}
```

## Install

Install with [npm](https://www.npmjs.com/) from the base directory of your Hexo site:

```
$ npm install --save --only=prod hexo-include
```

The `--only=prod` ensures that the development dependencies are not installed. If you want to run the tests, remove this flag. More info [here](https://docs.npmjs.com/cli/install).

## Requirements

- Node.js >= 14.0.0
- Hexo >= 6.0.0

## Changelog

### v1.2.0
- Updated dependencies to latest compatible versions
- Fixed security vulnerabilities
- Improved compatibility with modern Node.js versions
- Updated code to use ES6+ syntax where appropriate

## License

MIT (c) 2016 Robert Pirtle.
