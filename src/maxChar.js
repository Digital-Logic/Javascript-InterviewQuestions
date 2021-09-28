/**
 * Write a function that will return the character in the provided string that
 * repeats the most.
 * Make sure to ignore capitalization, punctuation, and spaces.
 *
 * Examples
 * Input: "Hello world", Output: "l"
 * Input: "Hello......world", Output: "l"
 *
 */

function maxChar(str) {
    const charMap = {};

    str.toLowerCase()
        .match(/\w/g)
        .forEach(c => {
           if (charMap[c] === undefined)
               charMap[c] = 1;
           else charMap[c] = charMap[c] + 1;
        });

    // const ary = Object.entries(charMap);
    // let max = ary[0][0];
    //
    // for (let i=1; i<ary.length; ++i)
    //     if (ary[i][1] > charMap[max])
    //         max = ary[i][0];
    //
    // return max;

    return Object.entries(charMap)
        .reduce((max, cur) => {
           if (cur[1] > max[1])
               return cur;
           return max;
        })[0];
}

function maxCharMap(str) {
    const charMap = str
        .toLowerCase()
        .match(/\w/g)
        .reduce((map, c) => {
            map.set(c, map.has(c) ? map.get(c) + 1 : 1);
            return map;
        }, new Map());

    return Array.from(charMap)
        .reduce((acc, cur) => {
            if (cur[1] > acc[1])
                return cur;
            return acc;
        })[0];
}

module.exports = {
    maxChar,
    maxCharMap
};