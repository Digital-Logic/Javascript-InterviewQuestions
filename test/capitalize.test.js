const solutions = require("../src/capitalize");

describe("Capitalize Each World Problem", () => {
    test("At lest one function is defined", () => {
        expect(Object.entries(solutions).length).toBeGreaterThan(0);
    });

    for (const [name, solution] of Object.entries(solutions)) {
        describe(`Testing solution: ${name}`, () => {

            test("Solution is a valid function", () => {
                expect(typeof solution).toEqual("function");
            });

            test.each([
                ["how can i help you?","How Can I Help You?"],
                ["macGruber rules!", "MacGruber Rules!"]
            ])(`Capitalize "%s" to "%s"`, (provided, expected) => {
                expect(solution(provided)).toEqual(expected);
            });
        });
    }
});