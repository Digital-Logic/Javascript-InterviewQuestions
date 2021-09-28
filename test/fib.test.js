const solutions = require("../src/fib");

/**
 * Fibonacci sequence test
 */
describe("Fibonacci Sequence Problem", () => {
    test("At lest on function is defined", () => {
        expect(Object.entries(solutions).length).toBeGreaterThan(0);
    });

    for (const [name, solution] of Object.entries(solutions)) {
        describe(`Testing solution: ${name}`, () => {

            test("Solution is a valid function", () =>
                expect(typeof solution).toEqual("function")
            );

            test.each([
                [1, 1],
                [2, 1],
                [3, 2],
                [4, 3],
                [5, 5],
                [20, 6765],
                [25, 75025],
                [30, 832040],
                [40, 102334155],
                // [44, 701408733],
                // [50, 12586269025]
            ])(`fib of %i is %i`, (provided, expected) => {
                expect(solution(provided)).toEqual(expected);
            });
        });
    }
});
