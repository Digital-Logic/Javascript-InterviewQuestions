const solutions = require("../src/anagrams");


describe("Anagrams Problem", () => {
    test("At lest one function is defined", () => {
        expect(Object.entries(solutions).length).toBeGreaterThan(0);
    });

    for (const [name, solution] of Object.entries(solutions)) {
        describe(`Testing solution: ${name}`, () => {

            test("Solution is a valid function", () =>
                expect(typeof solution).toEqual("function")
            );

            test.each([
                ["Arc", "Car", true],
                ["Bat", "Rat", false],
                ["Debit card","Bad credit", true],
                ["hell", "hel", false]
            ])(`"%s" is an Anagram of "%s": %s`, (strA, strB, expected) => {
                expect(solution(strA, strB)).toEqual(expected);
            });
        });
    }
});