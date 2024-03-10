import random from "@chriscodesthings/ultimate-random-number-er";

export default function (arr) {
    const from = Array.from(arr);
    const to = [];

    while (from.length) {
        to.push(from.splice(random(from.length - 1), 1)[0]);
    }

    return to;
}
