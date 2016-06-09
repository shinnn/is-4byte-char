/*!
 * is-4byte-char | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-4byte-char
*/
import codePoint from 'code-point';
import is4byteCodePoint from 'is-4byte-code-point';

export default function is4byteChar(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return false;
  }

  return is4byteCodePoint(codePoint(str));
}
