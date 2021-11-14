/**
 * YouTube: https://youtu.be/LazSsmcpz44
 *
 * Capitalize the first letter in each word in the provided string.
 * Examples
 * Input: "can i help you?", Output: "Can I Help You?"
 */


function capitalize(str) {
    const result = str.split(" ");

    for (let i=0; i<result.length; ++i)
        result[i] = result[i].slice(0,1).toUpperCase()
                        + result[i].slice(1);

    return result.join(" ");
}


function capitalizeTwo(str) {
    return str.split(" ")
        .map(w => w.slice(0,1).toUpperCase() + w.slice(1))
        .join(" ");
}


module.exports = {
    capitalize,
    capitalizeTwo
};