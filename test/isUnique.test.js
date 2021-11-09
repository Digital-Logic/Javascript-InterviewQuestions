const solutions = require("../src/isUnique");

/**
 * Fibonacci sequence test
 */
describe("IsUnique Problem", () => {
    test("At lest one function is defined", () => {
        expect(Object.entries(solutions).length).toBeGreaterThan(0);
    });

    for (const [name, solution] of Object.entries(solutions)) {
        describe(`Testing solution: ${name}`, () => {

            test("Solution is a valid function", () =>
                expect(typeof solution).toEqual("function")
            );

            test.each([
                ["hello", false],
                ["Alpha", false],
                ["car", true],
                ["Unique", false]
            ])('"%s" is unique: %s', (provided, expected) => {
                expect(solution(provided)).toEqual(expected);
            });
        });
    }
});