# tiny-tuple
Tiny tuple for Client or Server, which extends Array.

[![build status](https://secure.travis-ci.org/avoidwork/tiny-tuple.svg)](http://travis-ci.org/avoidwork/tiny-tuple)

## Example
```javascript
var tuple = require('tiny-tuple'),
    x = tuple(1,2,3, tuple(2,4));

x.length; // 4
x.extract(); // [1,2,3,2,4]
Object.isFrozen(x); // true
```

## API
#### extract()
Returns a frozen flat Array of the Tuple

## How can I load Tiny Tuple?
Tiny Tuple supports AMD loaders (require.js, curl.js, etc.), node.js & npm (npm install tiny-tuple), or using a script tag.

## License
Copyright (c) 2015 Jason Mulligan
Licensed under the BSD-3 license
