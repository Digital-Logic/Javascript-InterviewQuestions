const solutions = require("../src/matrixSpiral");

describe("Spiral Matrix Problem", () => {

    test("At lest one function is defined", () => {
        expect(Object.entries(solutions).length).toBeGreaterThan(0);
    });

    for (const [name, solution] of Object.entries(solutions)) {
        describe(`Testing solution: ${name}`, () => {

            test("Solution is a valid function", () => {
                expect(typeof solution).toEqual("function");
            });

            test.each( [
                [2, [[1,2],[4,3]]],
                [3, [[1,2,3],[8,9,4], [7,6,5]]],
                [4, [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]],
                [5, [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]]
            ])("Matrix spiral %i", (provided, expected) => {
                expect(solution(provided)).toEqual(
                    expect.arrayContaining(expected)
                );
            });
        });
    }
});