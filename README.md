# 🧰 rikey

_(pronouned rē-kē, because `rekey` was taken)_

[![npm](https://img.shields.io/npm/v/rikey?style=flat-square)](https://www.pkgstats.com/pkg:rikey)
[![NPM](https://img.shields.io/npm/l/rikey?style=flat-square)](LICENSE)
[![npm](https://img.shields.io/npm/dt/rikey?style=flat-square)](https://www.pkgstats.com/pkg:rikey)
[![Coveralls github](https://img.shields.io/coveralls/github/ryanhefner/rikey?style=flat-square)](https://coveralls.io/github/ryanhefner/rikey)
[![codecov](https://codecov.io/gh/ryanhefner/rikey/branch/master/graph/badge.svg)](https://codecov.io/gh/ryanhefner/rikey)
[![CircleCI](https://img.shields.io/circleci/build/github/ryanhefner/rikey?style=flat-square)](https://circleci.com/gh/ryanhefner/rikey)

Useful utilities for manipulating–and creating–Object instances.

## Install

Via [npm](https://npmjs.com/package/rikey)

```
npm install --save rikey
```

Via [Yarn](https://yarn.fyi/rikey)

```
yarn add rikey
```

## How to use

### `reKey`

```js
import { reKey } from 'rikey'

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
