# randomize-array &middot; [![Test workflow status](https://github.com/ChrisCodesThings/randomize-array/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/randomize-array)](https://www.npmjs.com/package/@chriscodesthings/randomize-array) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Function to randomize an array**

## Install

```sh
npm install --save @chriscodesthings/randomize-array
```

## Use

```js
import randomizeArray from '@chriscodesthings/randomize-array';

console.log(randomizeArray([1, 2, 3, 4, 5]));
// => [3, 2, 5, 1, 4]
```

## Syntax

```js
randomizeArray(arr);
```

### Parameters

- *arr*: an array to randomize

### Return Value

Returns a copy of *arr* in a random order.

## Description

Does what it says on the tin.