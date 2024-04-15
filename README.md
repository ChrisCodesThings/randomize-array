# randomize-array <br> [![Test workflow status](https://github.com/ChrisCodesThings/randomize-array/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/randomize-array)](https://www.npmjs.com/package/@chriscodesthings/randomize-array) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Function to randomize an array**

## Description

Returns a copy of the array in a randomized order.

### See...
- [Install/Usage](#install "Install and Usage")
- [Syntax](#syntax "Syntax")
- [Examples](#examples "Examples")
- [See Also](#see-also "See Also")

---

## Install

```sh
npm install --save @chriscodesthings/randomize-array
```

## Usage

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

- *arr*: an array of things to randomize

### Return Value

Returns a copy of *arr* in a random order.

## Examples

```js
// pick 2 security questions
function pickQuestions() {
    const questions = [
        "Favourite colour",
        "Favourite food",
        "Favourite place",
        "Favourite TV show",
        "Favourite song",
    ];

    return randomizeArray(questions).splice(-2);
}
```

## See Also...

- [**ultimate-random-number-er**: Generates random numbers with options for ranges, repetition, past and future sequences ... and more!](https://github.com/ChrisCodesThings/ultimate-random-number-er "Generates random numbers with options for ranges, repetition, past and future sequences ... and more!")
- [**random-css-hex-color**: Generates a random color in CSS hex format](https://github.com/ChrisCodesThings/random-css-hex-color "Generates a random color in CSS hex format")
