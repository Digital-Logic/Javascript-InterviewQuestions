const solutions = require("../src/maxChar");


describe("Max Characters Problem", () => {

    test("At lest one function is defined", () => {
        expect(Object.entries(solutions).length).toBeGreaterThan(0);
    });

    for (const [name, solution] of Object.entries(solutions)) {
        describe(`Testing solution: ${name}`, () => {

            test("Solution is a valid function", () =>
                expect(typeof solution).toEqual("function")
            );

            test.each([
                ["aggressiveness", "s"],
                ["hello....world", "l"],
                ["hello_____WORLD", "l"],
                ["Cat in THE haT!", "t"],
           //     ["..,_", ""],
            ])("MaxChar of '%s' should be '%s'", (provided, expected) => {
                expect(solution(provided) ).toEqual(expected);
            });
        });
    }
});