/**
 * Write a function that will return the character in the provided string that
 * repeats the most. The returned string, should be lowercase.
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
        .replace(/[\W_]/g, "")
        .split("")
        .forEach(cur => {
            charMap[cur] = charMap[cur] ? charMap[cur] + 1 : 1;
           // if (charMap[c] === undefined)
           //     charMap[c] = 1;
           // else charMap[c] = charMap[c] + 1;
        });

    // const charAry = Object.entries(charMap);
    // let max = charAry[0][0];
    //
    // for (let i=1; i<charAry.length; ++i)
    //     if (charAry[i][1] > charMap[max])
    //         max = charAry[i][0];
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
        .match(/[a-z0-9]/g)
        .reduce((map, c) => {
            return map.set(c, map.has(c) ? map.get(c) + 1 : 1);
        }, new Map());

    return Array.from(charMap)
        .reduce((acc, cur) => {
            if (cur[1] > acc[1])
                return cur;
            return acc;
        })[0];
}

function intMap(str) {
    const A_CODE = "a".charCodeAt(0);
    const intMap = new Array(26).fill(0);

    for (const next of str.toLowerCase().match(/(?!_)\w/g)) {
        intMap[next.charCodeAt(0) - A_CODE]++;
    }

    let max=0;
    for (let i=1; i<intMap.length; ++i)
        if (intMap[i] > intMap[max])
            max = i;

    return String.fromCharCode(max + A_CODE);
}

module.exports = {
    maxChar,
    maxCharMap,
    intMap
};