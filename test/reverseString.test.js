const solutions = require("../src/reverseString");

describe("Reverse String Problem", () => {

    test("At lest one function is defined", () => {
        expect(Object.entries(solutions).length).toBeGreaterThan(0);
    });

    for (const [name, solution] of Object.entries(solutions)) {
        describe(`Testing solution: ${name}`, () => {

            test("Solution is a valid function", () => {
                expect(typeof solution).toEqual("function");
            });

            test.each( [
                ["hello world", "dlrow olleh"],
                ["dog", "god"],
                ["abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"]
            ])(`Reverse %s to %s`, (provided, expected) => {
                expect(solution(provided)).toEqual(expected);
            });
        });
    }
});