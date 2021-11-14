/**
 * YouTube: https://youtu.be/hEi1mO6SCK0
 *
 * Directions
 * Write a function that will return the provided string
 * with the letters in reverse order.
 * Examples
 * reverse("car") == "rac"
 * reverse("dog") == "god"
 * reverse("abcde") == "edcba"
 *
 * Try to create more than one solution.
 * Every solution that is exported from this file will be tested
 */

function appendString(str) {
    let result = "";

    for (const s of str) {
        result = s + result;
    }
    return result;
}

function stringArray(str) {
    const result = str.split("");

    for (let f=0, b=result.length-1; f<b; ++f, --b) {
        const temp = result[f];
        result[f] = result[b];
        result[b] = temp;
    }
    return result.join("");
}

function stringReverse(str) {
    return str.split("")
        .reverse()
        .join("");
}

function reduceString(str) {
    return str.split("")
        .reduce((acc, s) => {
            return s + acc;
        });
}

function reduceStringTwo(str) {
    return str.split("")
        .reduceRight((acc, s) => {
            acc.push(s);
            return acc;
        },[]).join("");
}



module.exports = {
    appendString,
    stringArray,
    stringReverse,
    reduceString,
    reduceStringTwo
};