/**
 * YouTube: https://youtu.be/aUm4Y9arfOc
 *
 * Write a function that returns the number of vowels in a string.
 * Vowels are the characters a,e,i,o,u.
 * Examples
 * "Hello world" => 3
 * "Apples are red" => 5
 */


function countVowels(str) {
    const vowels = "aeiou".split("");

    let count=0;

    for (const cur of str.toLowerCase()) {
        if (vowels.includes(cur))
            ++count;
    }
    return count;
}

function matchVowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

function filterVowels(str) {
    const vowels = new Set();
    "aeiou".split("")
        .forEach(c => vowels.add(c));

    return str.toLowerCase().split("")
        .filter(c => vowels.has(c))
        .length;
}


module.exports = {
    countVowels,
    matchVowels,
    filterVowels
};