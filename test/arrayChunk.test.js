const solutions = require("../src/arrayChunk");

describe("Array Chunk Problem", () => {

    test("At lest one function is defined.", () => {
        expect(Object.entries(solutions).length).toBeGreaterThan(0);
    });

    for (const [name, solution] of Object.entries(solutions)) {
        describe(`Testing solution: ${name}`, () => {

            test("Solution is a valid function", () => {
                expect(typeof solution).toEqual("function");
            });

            test.each( [
                ["2x2", [1,2,3,4], 2, [[1,2],[3,4]]],
                ["3x2", [1,2,3,4,5,6],2,[[1,2],[3,4],[5,6]]],
                ["2x3", [1,2,3,4,5,6,7,8,9], 3, [[1,2,3],[1,2,3]]],
                ["4x3", [1,2,3,4,5,6,7,8,9,10], 3, [[1,2,3],[4,5,6],[7,8,9],[10]]]
            ])(`Chunk array into a "%s"`, (name, provided, size, expected) => {
                expect(solution(provided, size)).toEqual(
                    expect.arrayContaining(expected)
                );
            });
        });
    }
});