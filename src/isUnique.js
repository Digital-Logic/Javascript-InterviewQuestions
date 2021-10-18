/**
 * Write a function that can determine if a String contains only unique characters.
 * That is a character can only appear once within the string.
 * Ignore capitalization.
 *
 * Examples
 * Input: "hello", Output: false
 * Input: "kind", Output: true
 * Input: "Denver", Output: false
 * Input: "Alpha", Output: false
 *
 * Extra Credit!!!
 * Can you perform the check without any additional data structures?
 */

function sorted(str) {
    const ary = str.toLowerCase()
        .match(/\w/g)
        .sort();

    for (let i=0; i<ary.length-1; ++i) {
        if (ary[i] === ary[i+1])
            return false;
    }
    return true;
}

function hashSet(str) {
    const strAry = str.toLowerCase()
        .match(/\w/g);

    const charMap = new Set();

    for (const c of strAry) {
        if (charMap.has(c))
            return false;
        charMap.add(c);
    }
    return true;
}

function intArray(str) {
    const A_CODE = "a".charCodeAt(0);
    const charMap = new Array(26)
        .fill(0, 0);

    for (const c of str.toLowerCase().match(/\w/g)) {
        const code = c.charCodeAt(0) - A_CODE;

        if (charMap[code] > 0)
            return false;

        charMap[code]++;
    }
    return true;
}

function extraCredit(str) {
    let bitArray = 0;
    const A_CODE = "a".charCodeAt(0);

    for (const c of str.match(/\w/g)) {
        const bitMask = 1 << (c.charCodeAt(0) - A_CODE);

        if ((bitArray & bitMask) !== 0)
            return false;

        bitArray |= bitMask;
    }
    return true;
}


module.exports = {
    sorted,
    hashSet,
    intArray,
    extraCredit
};