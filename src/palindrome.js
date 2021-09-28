/**
 * Given a String, determine if the string is a palindrome.
 * A palindrome is a sequence of characters and numbers that reads the same backwards or forwards.
 * Ignore capitalization, punctuation, underscores and spaces.
 * Example
 * "hannah!" => true
 * "Taco cat" => true
 * "dog" => false
 */


function replace(str) {
    str = str.toLowerCase()
        .replace(/[\W_]/g, "");

    for (let f=0, b=str.length-1; f<b; ++f, --b) {
        if (str[f] !== str[b])
            return false;
    }
    return true;
}

function select(str) {
    const strAry = str.toLowerCase()
        .match(/[a-z0-9]/g);

    for (let f=0, b=strAry.length-1; f<b; ++f, --b) {
        if (strAry[f] !== strAry[b])
            return false;
    }
    return true;
}


module.exports = {
    replace,
    select
};