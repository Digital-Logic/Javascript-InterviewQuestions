/**
 * Given two strings, write a function that will determine if one string is
 * an anagram of another. An anagram is a string that is formed by rearranging
 * the letters of another string.
 * Ignore capitalization, punctuation, and spaces.
 *
 * Examples
 * "Arc" is an anagram of "Car"
 * "Debit card" is an anagram of "Bad credit"
 * "Astronomer" is an anagram of "Moon starer"
 */

function sorted(strA, strB) {
    const aryA = strA.toLowerCase().match(/[a-z0-9]/g).sort();
    const aryB = strB.toLowerCase().replace(/[\W_]/g,"").split("").sort();

    if (aryA.length !== aryB.length)
        return false;

    for (let i=0; i<aryA.length; ++i) {
        if (aryA[i] !== aryB[i])
            return false;
    }
    return true;
}


function anagramsCharMap(strA, strB) {
    const charMapA = toCharMap(strA);
    const charMapB = toCharMap(strB);

    if (charMapA.size !== charMapB.size)
        return false;

    for (const [c, count] of charMapA) {
        if (charMapB.get(c) !== count)
            return false;
    }
    return true;
}

// convert string to char map
function toCharMap(str) {
    return str.toLowerCase()
        .match(/[a-z]/g)
        .reduce((map, c) =>
            map.set(c, map.has(c) ? map.get(c) + 1 : 1
            ), new Map()
        );
}


module.exports = {
    sorted,
    anagramsCharMap,
};