
/**
 * 1. Write a function that will rotate an NxN matrix clockwise by 90 degrees.
 *    The matrix is guaranteed to be square.
 * Examples
 * [[1,2], => [[3,1],
 *  [3,4]]     [4,2]]
 *
 *  [[1,2,3],    [[7,4,1],
 *   [4,5,6], =>  [8,5,2],
 *   [7,8,9]]     [9,6,3]]
 *
 *  2. Can you rotate the matrix in-place?
 **/

function rotateMatrix(grid) {
    const MAX = grid.length;
    const result = [...new Array(MAX)].map(() => []);

    for (let y1=0, x2=MAX-1; y1<MAX; ++y1, --x2) {
        for (let i=0; i<MAX; ++i) {
            result[i][x2] = grid[y1][i];
        }
    }
    return result;
}

function rotateInPlace(grid) {
    let width = grid.length-1;

    for (let l=0; l<grid.length/2; ++l) {
        for (let i = l; i < width - l; ++i) {
            const temp = grid[l][i];

            grid[l][i] = grid[width - i][l];
            grid[width - i][l] = grid[width-l][width - i];
            grid[width-l][width - i] = grid[i][width-l];
            grid[i][width-l] = temp;
        }
    }

    return grid;
}

function rotationInPlaceTwo(grid) {
    let top=0,
        left=0,
        right=grid.length-1,
        bottom=grid.length-1;

    while(top<bottom) {
        // store top row into cache
        const cache = grid[top].slice(left, right);

        // copy left column into top row
        for (let x=left, y=bottom;x<right; ++x, --y)
            grid[top][x] = grid[y][left];

        // copy bottom row into left column
        for (let y=bottom, x=right; y>top; --y, --x)
            grid[y][left] = grid[bottom][x];

        // copy right column into bottom row;
        for (let x=right, y=top; y<bottom; ++y, x--)
            grid[bottom][x] = grid[y][right];

        // copy cache into right column
        for (let y=top, i=0; i< cache.length; ++y, ++i)
            grid[y][right] = cache[i];

        ++top; ++left; --right; --bottom;
    }

    return grid;
}


module.exports = {
    rotateMatrix,
    rotateInPlace,
    rotationInPlaceTwo
};