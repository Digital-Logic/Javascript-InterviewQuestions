/**
 * Write a function that will produce the n-th number within the fibonacci sequence.
 * The fibonacci sequence is the series of numbers:
 * 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
 * The next number is generated by adding up the previous two number before it.
 * Therefore the n-th number = fib(n-1) + fib(n-2)
 * Example
 * fib(1) = 1
 * fib(2) = 1
 * fib(3) = 2
 * fib(4) = 3
 * ...
 */

function fib(n) {
    const result = [0,1];
    for (let i=2; i<=n; ++i)
        result[i] = result[i-1] + result[i-2];

    return result[n];
}

function fibOp(n) {
    const result = [0,1];

    for (let i=2; i<=n; ++i)
        result[i%2] = result[0] + result[1];

    return result[n%2];
}

function recursive(n) {
    if (n<=1) {
        return n;
    }

    return recursive(n-1) + recursive(n-2);
}

/**
 * Uses an internal cache to reduce redundant computation
 * @param n
 * @param cache
 * @returns {number}
 */
function recursiveCached(n, cache = [0,1]) {
    if (cache[n] !== undefined) {
        return cache[n];
    }

    cache[n] = recursiveCached(n-1, cache) + recursiveCached(n-2, cache);

    return cache[n];
}

const recursiveMemoized = memoize(function _fib(n) {
    if (n <= 1)
        return n;

    return recursiveMemoized(n-1) + recursiveMemoized(n-2);
});


/**
 * Memoization function
 * @param func
 * @returns {function(...[*]=): any}
 */
function memoize(func) {
    const cache = new Map();

    return function _memorized(...args) {
        const key = JSON.stringify(args);
        if (!cache.has(key))
            cache.set(key, func(...args));

        return cache.get(key);
    }
}

module.exports = {
    fib,
    fibOp,
    recursive,
    recursiveCached,
    recursiveMemorized: recursiveMemoized
};