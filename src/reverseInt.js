/**
 * Write a function that will take an integer and reverse the order of the numbers
 * within that integer.
 * Examples
 * 123 => 321
 * 450 => 54
 * -763 => -367
 * -20 => -2
 */

function toString(n) {
    return Number.parseInt(
        Math.abs(n)
            .toString()
            .split("")
            .reverse()
            .join("")
    ) * Math.sign(n);
}

function reverseInt(n) {
    const sign = Math.sign(n);
    n = Math.abs(n);

    let result = 0;

    while (n > 0) {
        result = (result * 10) + (n % 10);
        n = Math.floor(n / 10);
    }

    return result * sign;
}

module.exports = {
    toString,
    reverseInt
};