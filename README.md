# luck-balance [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> HackerRank [Luck Balance](https://www.hackerrank.com/challenges/luck-balance/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms) challenge solution

## Installation

```sh
$ npm install --save luck-balance
```

## Usage

```js
const luckBalance = require('luck-balance');

const k = 3;

const contests = [
  [5, 1],
  [2, 1],
  [1, 1],
  [8, 1],
  [10, 0],
  [5, 0]
];

let maximumLuckAmount = luckBalance(k, contests);
```
## License

Apache-2.0 © [Diego Rani Mazine]()


[npm-image]: https://badge.fury.io/js/luck-balance.svg
[npm-url]: https://npmjs.org/package/luck-balance
[travis-image]: https://travis-ci.org/dmazine/luck-balance.svg?branch=master
[travis-url]: https://travis-ci.org/dmazine/luck-balance
[daviddm-image]: https://david-dm.org/dmazine/luck-balance.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/dmazine/luck-balance
