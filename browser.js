/*!
 * is-4byte-char | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-4byte-char
*/
window.is4byteChar = function is4byteChar(str) {
  'use strict';

  if (typeof str !== 'string' || str.length === 0) {
    return false;
  }

  return window.is4byteCodePoint(window.codePoint(str));
};
