# is-4byte-char

[![NPM version](https://img.shields.io/npm/v/is-4byte-char.svg)](https://www.npmjs.com/package/is-4byte-char)
[![Bower version](https://img.shields.io/bower/v/is-4byte-char.svg)](https://github.com/shinnn/is-4byte-char/releases)
[![Build Status](https://travis-ci.org/shinnn/is-4byte-char.svg?branch=master)](https://travis-ci.org/shinnn/is-4byte-char)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-4byte-char.svg)](https://coveralls.io/github/shinnn/is-4byte-char?branch=master)
[![Dependency Status](https://david-dm.org/shinnn/is-4byte-char.svg)](https://david-dm.org/shinnn/is-4byte-char)
[![Dependency Status](https://david-dm.org/shinnn/is-4byte-char.svg)](https://david-dm.org/shinnn/is-4byte-char)

Check if a given value is a character that costs 4 bytes in [UTF-8](https://tools.ietf.org/html/rfc3629)

```javascript
import is4byteChar from 'is-4byte-char';

is4byteChar('１'); //=> false
is4byteChar('🔶'); //=> true
```

## Installation

#### [npm](https://www.npmjs.com/)

```
npm install is-4byte-char
```

#### [Bower](http://bower.io/)

```
bower install is-4byte-char
```

### is4byteChar(*val*)

*val*: any types  
Return: `Boolean`

It returns `true` if the argument is a 4-byte character in [UTF-8](https://encoding.spec.whatwg.org/#utf-8), otherwise `false`.

```javascript
is4byteChar(String.fromCodePoint(0x0080)); //=> false
is4byteChar(String.fromCodePoint(0x0800)); //=> false
is4byteChar(String.fromCodePoint(0x10000)); //=> true

// Non-string value
is4byteChar(123); //=> false
```

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
