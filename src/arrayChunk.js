/**
 * Write a function that will take the elements of an array,
 * and group them into sub-arrays of the defined size.
 * Example
 * Input: ([1,2,3,4], 2), Output: [[1,2],[3,4]]
 * Input: ([1,2,3,4,5,6], 2), Output: [[1,2],[3,4],[5,6]]
 * Input: ([1,2,3,4,5], 2), Output: [[1,2],[3,4],[5]]
 */

function arrayChunk(ary, size) {
    const result = [];
    const rows = Math.ceil(ary.length / size);

    for (let x=0; x<rows; ++x) {
        result[x] = [];

        for (let y=0; y<size && (x*size+y) < ary.length; ++y)
            result[x][y] = ary[x*size+y];
    }

    return result;
}

function chunkSlice(ary, size) {
    const result = [];
    for (let i=0; i<ary.length; i += size) {
        result.push(ary.slice(i, i+size));
    }
    return result;
}

function chunkSplice(ary, size) {
    const result = [];
    while(ary.length > 0)
        result.push(ary.splice(0, size));
    return result;
}


module.exports = {
    arrayChunk,
    chunkSlice,
    chunkSplice
};

