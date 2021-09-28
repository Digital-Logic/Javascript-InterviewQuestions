const solutions = require("../src/reverseInt");


describe("Reverse Int Problem", () => {

    test("At lest one function is defined", () => {
        expect(Object.entries(solutions).length).toBeGreaterThan(0);
    });

    for (const [name, solution] of Object.entries(solutions)) {
        describe(`Testing solution: ${name}`, () => {

            test("Solution is a valid function", () =>
                expect(typeof solution).toEqual("function")
            );

            test.each([
                [123, 321],
                [450, 54],
                [-763, -367],
                [-20, -2]
            ])("Reverse Int of '%s' should be '%s'", (provided, expected) => {
                expect(solution(provided)).toEqual(expected);
            });
        });
    }
});