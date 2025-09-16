/* eslint-env node, mocha */

const pathFn = require('path');
const should = require('chai').should();
const Hexo = require('hexo');
const fs = require('hexo-fs');

const hexo = new Hexo(pathFn.join(__dirname, 'include_test'));

const include = require('../lib/include.js')(hexo);

describe('Include tag', function() {
  const filePath = pathFn.join(hexo.source_dir, 'test_dir/test.html');
  const emptyPath = pathFn.join(hexo.source_dir, 'test_dir/empty.html');

  const fixture = [
    '<h1>go to sleep ya little bae</h1>',
    'if (tired && night){',
    '  sleep();',
    '}'
  ].join('\n');

  // returns the rendered contents
  function renderedContent(file) {
    return include([file]);
  }

  before(function() {
    // create files for testing
    fs.writeFileSync(filePath, fixture);
    fs.writeFileSync(emptyPath, '');
    return;
  });

  after(function() {
    // remove the testing arena
    return fs.rmdir(hexo.base_dir);
  });

  it('existing file', function() {
    return renderedContent('test_dir/test.html').then(result => {
      result.should.eql(fixture);
    });
  });

  it('empty file', function() {
    return renderedContent('test_dir/empty.html').then(result => {
      should.not.exist(result);
    });
  });

  it('nonexistent file', function() {
    return renderedContent('this/file/doesnt/exist.magic').then(result => {
      should.not.exist(result);
    });
  });
});
