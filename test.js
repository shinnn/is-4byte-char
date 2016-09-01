'use strict';

const requireBowerFiles = require('require-bower-files');
const requireFromString = require('require-from-string');
const {rollup} = require('rollup');
const rollupNodeResolve = require('rollup-plugin-node-resolve');
const test = require('tape');

global.window = {};
requireBowerFiles({self: true});

function runTest(is4byteChar, description) {
  test(description, t => {
    t.strictEqual(is4byteChar.name, 'is4byteChar', 'should have a function name.');

    t.strictEqual(
      is4byteChar('A'),
      false,
      'should return false when it takes a 1-byte character.'
    );

    t.strictEqual(
      is4byteChar('º'),
      false,
      'should return false when it takes a 2-byte character.'
    );

    t.strictEqual(
      is4byteChar('田'),
      false,
      'should return false when it takes a 3-byte character.'
    );

    t.strictEqual(
      is4byteChar('𠮷'),
      true,
      'should return true when it takes a 4-byte character.'
    );

    t.strictEqual(
      is4byteChar(new Buffer('a')),
      false,
      'should return false when it takes a non-string value.'
    );

    t.end();
  });
}

rollup({
  entry: require('./package.json')['jsnext:main'],
  plugins: rollupNodeResolve({jsnext: true})
}).then(bundle => {
  runTest(require('.'), 'require(\'is-4byte-char\')');
  runTest(global.window.is4byteChar, 'window.is4byteChar');
  runTest(requireFromString(bundle.generate({format: 'cjs'}).code), 'Module exports');
});
