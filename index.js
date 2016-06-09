/*!
 * is-4byte-char | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-4byte-char
*/
'use strict';

var codePoint = require('code-point');
var is4byteCodePoint = require('is-4byte-code-point');

module.exports = function is4byteChar(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return false;
  }

  return is4byteCodePoint(codePoint(str));
};
