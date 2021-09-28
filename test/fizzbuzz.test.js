const solutions = require("../src/fizzbuzz.js");

describe("FizzBuzz Problem", () => {

    const log = jest.spyOn(console, "log");

    // Validate each function exported from index
    test('At lest one function is defined', () =>
        expect(Object.entries(solutions).length).toBeGreaterThan(0)
    );

    for (const [name, solution] of Object.entries(solutions)) {

        describe(`Testing solution: ${name}`, () => {

            test("Solution is a valid function", () =>
                expect(typeof solution).toEqual("function")
            );

            test.each([
                [3, [1,2,"fizz"]],
                [6, [1, 2, "fizz",4,"buzz","fizz"]],
                [15, [1, 2, "fizz",4,"buzz","fizz",7,8,"fizz","buzz",11,"fizz",13,14,"fizzbuzz"]],
                [30, [1, 2, "fizz",4,"buzz","fizz",7,8,"fizz","buzz",11,"fizz",13,14,"fizzbuzz",
                    16,17,"fizz",19,"buzz","fizz",22,23,"fizz","buzz",26,"fizz",28,29,"fizzbuzz"]]
            ])("fizzbuzz of %i", (provided, expected) => {
                log.mockReset();

                // execute the solution
                solution(provided);

                expect(log.mock.calls).toHaveLength(expected.length);

                for (let i=0; i<expected.length; ++i) {
                    expect(log.mock.calls[i][0]).toEqual(expected[i]);
                }
            });
        });
    }
});


