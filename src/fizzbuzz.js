/**
 * YouTube: https://youtu.be/Clzf8KNoRdI
 *
 * Write a function that will console.log the numbers from 1 to n except for,
 * 1. each number that is divisible by 3 console.log("fizz")
 * 2. each number that is divisible by 5 console.log("buzz")
 * 3. each number that is divisible by 3 and 5 console.log("fizzbuzz")
 *
 * Examples:
 * 5 => {"1","2","fizz","4","buzz"}
 * 15 => {"1","2","fizz","4","buzz", "fizz","7","8","fizz","buzz","11","fizz","13","14","fizzbuzz"}
 */

function solution(n) {
    for (let i=1; i<=n; ++i) {
        if ((i % 3 === 0) && (i % 5 === 0))
            console.log("fizzbuzz");
        else if (i % 3 === 0)
            console.log("fizz");
        else if (i % 5 === 0)
            console.log("buzz");
        else console.log(i);
    }
}

module.exports = {
    solution
};