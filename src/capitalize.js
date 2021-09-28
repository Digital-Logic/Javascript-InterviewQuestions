/**
 * Capitalize the first letter in each word in the provided string.
 * Examples
 * Input: "can i help you?", Output: "Can I Help You?"
 */

function capitalizeWords(str) {
    return str.split(" ")
        .map(c => c.slice(0,1).toUpperCase() + c.slice(1))
        .join(" ");
}


module.exports = {
    capitalizeWords
};