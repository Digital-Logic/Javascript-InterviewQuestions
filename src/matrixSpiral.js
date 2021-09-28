/**
 * Write a function that will return a NxN matrix that
 * spirals clockwise, starting at position [0][0] with the
 * value of 1, and ending at the value of n².
 *
 * Examples
 * 2 => [[1, 2],
 *       [4, 3]]
 *
 * 3 => [[1, 2, 3],
 *       [8, 9, 4],
 *       [7, 6, 5]]
 *
 * 4 => [[ 1,  2,  3, 4],
 *       [12, 13, 14, 5],
 *       [11, 16, 15, 6],
 *       [10,  9,  8, 7]]
 */

function matrixSpiral(n) {
    const grid = Array.from({ length: n }, () => new Array(n).fill(0, 0));

    let top=0,
        left=0,
        right=n-1,
        bottom=n-1;

    let index=1,
        max=n*n;

    while(index <= max) {

        for (let i=left; i<=right; ++i)
            grid[top][i] = index++;
        ++top;

        for (let i=top; i<=bottom; ++i)
            grid[i][right] = index++;
        --right;

        for (let i=right; i>=left; --i)
            grid[bottom][i] = index++;
        --bottom;

        for (let i=bottom; i>=top; --i)
            grid[i][left] = index++;
        ++left;
    }
    return grid;
}


module.exports = {
    matrixSpiral
};