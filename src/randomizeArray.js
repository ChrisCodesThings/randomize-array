// @ts-check

function r(n) { return Math.round(Math.random() * n); }

/**
 * Makes a copy of an array in a randomized order
 * @param {Array} arr A list of things to be randomized
 * @returns {Array}
 */
export default function randomizeArray(arr) {
    const from = Array.from(arr);
    const to = [];

    while (from.length) {
        to.push(from.splice(r(from.length - 1), 1)[0]);
    }

    return to;
}
