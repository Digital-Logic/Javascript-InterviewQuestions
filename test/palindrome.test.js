const solutions = require("../src/palindrome");

describe("Palindrome Problem", () => {

    test("At lest one function is defined", () => {
        expect(Object.entries(solutions).length).toBeGreaterThan(0);
    });

    for (const [name, solution] of Object.entries(solutions)) {
        describe(`Testing solution: ${name}`, () => {

            test("Solution is a valid function", () => {
                expect(typeof solution).toEqual("function");
            });

            test.each( [
                ["hannah!", true],
                ["dog", false],
                ["I", true],
                ["-race car", true],
                ["Taco cat ", true],
                ["Amore_, Roma!", true],
                ["d21d", false],
                ["or", false]
            ])("%s is a palindrome: %s", (provided, expected) => {
                expect(solution(provided)).toEqual(expected);
            });
        });
    }
});