# smry

Сomputes a summary for number array

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

## Install

```bash
npm i smry
```

## Usage

```js
const smry = require('smry');

console.log(smry([4, 1, 3, 5, 2]));
/*
{ min: 1,
  max: 5,
  sum: 15,
  len: 5,
  avg: 3 }
*/
```

## License

MIT

[npm-url]: https://npmjs.org/package/smry
[npm-image]: https://badge.fury.io/js/smry.svg
[travis-url]: https://travis-ci.org/astur/smry
[travis-image]: https://travis-ci.org/astur/smry.svg?branch=master