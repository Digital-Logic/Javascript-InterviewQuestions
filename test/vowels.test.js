const solutions = require("../src/vowels");

describe("Count Vowels Problem.", () => {
    test("At lest on function is defined.", () => {
        expect(Object.entries(solutions).length).toBeGreaterThan(0);
    });

    for (const [name, solution] of Object.entries(solutions)) {
        describe(`Testing solution: ${name}`, () => {

            test("Solution is a valid function", () =>
                expect(typeof solution).toEqual("function")
            );

            test.each([
                ["hello world!", 3],
                ["Apples are red.", 5],
                ["U.are-not_alone!", 7],
                ["YOU>ARE<NOT_ALONE!!!.", 8],
                [" ", 0]
            ])(`Vowels in %s should be %i`, (provided, expected) => {
                expect(solution(provided)).toEqual(expected);
            });
        });
    }
});