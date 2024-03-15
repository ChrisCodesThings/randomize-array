
const { default: testFunc } = await import("../");

describe("randomizing 100 numbers", () => {
    const sourceArr = [];

    for (let i = 0; i < 100; i++) {
        sourceArr.push(i);
    }

    const shuffled = testFunc(sourceArr);

    test("contains 100 numbers", async () => {
        expect(sourceArr.length).toEqual(100);
    });

    test("contains the original 100 numbers", async () => {
        const sorted = Array.from(shuffled).sort((a, b) => { return a > b ? 1 : -1; });
        expect(sorted).toEqual(sourceArr);
    });

    test("they aren't in the same order", async () => {
        expect(shuffled).not.toEqual(sourceArr);
    });

    test("there are no duplicates", async () => {
        const unique = Array.from(new Set(shuffled));
        expect(unique.length).toEqual(100);
    });
});
