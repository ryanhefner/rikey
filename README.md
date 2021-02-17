# ⛓ re-key

[![npm](https://img.shields.io/npm/v/re-key?style=flat-square)](https://www.pkgstats.com/pkg:re-key)
[![NPM](https://img.shields.io/npm/l/re-key?style=flat-square)](LICENSE)
[![npm](https://img.shields.io/npm/dt/re-key?style=flat-square)](https://www.pkgstats.com/pkg:re-key)
[![Coveralls github](https://img.shields.io/coveralls/github/ryanhefner/re-key?style=flat-square)](https://coveralls.io/github/ryanhefner/re-key)
[![codecov](https://codecov.io/gh/ryanhefner/re-key/branch/master/graph/badge.svg)](https://codecov.io/gh/ryanhefner/re-key)
[![CircleCI](https://img.shields.io/circleci/build/github/ryanhefner/re-key?style=flat-square)](https://circleci.com/gh/ryanhefner/re-key)

Useful utilities for manipulating–and creating–Object instances.

## Install

Via [npm](https://npmjs.com/package/re-key)

```
npm install --save re-key
```

Via [Yarn](https://yarn.fyi/re-key)

```
yarn add re-key
```

## How to use

### `reKey`

```js
import { reKey } from 're-key'

const newKeys = reKey({
  oldKey: 'something',
  olderKey: 'nothing',
}, {
  oldKey: 'newKey',
  olderKey: 'newerKey'
})

console.log(newKeys)
```
```
Output: { newKey: 'something', newerKey: 'nothing' }
```

### `mapKeys`

```js
const mappedKeys = mapKeys([0, 1, 2], ['first', 'second', 'third'])
console.lot(mappedKeys)
```
```
Output: { first: 0, second: 1, third: 2 }
```

## License

[MIT](LICENSE) © [Ryan Hefner](https://www.ryanhefner.com)
