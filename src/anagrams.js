/**
 * Given two strings, write a function that will determine if one string is
 * an anagram of another. An anagram is a string that is formed by rearranging
 * the letters of another string.
 * Ignore capitalization, punctuation, and spaces.
 *
 * Examples
 * isAnagram("Arc", "Car") => true
 * isAnagram("Debit card", "Bad credit") => true
 * isAnagram("Astronomer!", "Moon starer") => true
 */

function sorted(strA, strB) {
    const copyA = strA.toLowerCase().match(/[a-z0-9]/g).sort().join("")
    const copyB = strB.toLowerCase().replace(/[\W_]/g,"").split("").sort().join("");

    return copyA === copyB;
}


function charMap(strA, strB) {
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

function intArray(strA, strB) {
    const charMap = new Array(26).fill(0);

    const copyA = strA.toLowerCase().replace(/[^a-z]/g, "");
    const copyB = strB.toLowerCase().replace(/[^a-z]/g, "");

    if (copyA.length !== copyB.length)
        return false;

    for (const c of copyA)
        charMap[c.charCodeAt(0) - "a".charCodeAt(0)]++;

    for (const c of copyB)
        charMap[c.charCodeAt(0) - "a".charCodeAt(0)]--;

    for (const n of charMap)
        if (n !== 0)
            return false;

    return true;
}


module.exports = {
    sorted,
    charMap,
    intArray
};