/*
Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. 
Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b.
Assume that if a value has already been cached for the arguments (b, a) where a != b, 
it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), 
two separate calls should be made.

fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
*/

function memoize(fn) {
    let cache = new Map();
    return function(...args){
        let key = fn.name === 'sum' ? JSON.stringify(args) : args[0];
        if(!cache.has(key)){
            cache.set(key, fn(...args))
        } 
        return cache.get(key);
    }
}   

// Function definitions
const sum = (a, b) => a + b;
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));

// Memoize the functions
const sumMemoized = memoize(sum);
const factorialMemoized = memoize(factorial);
const fibMemoized = memoize(fib);

// Example usage
console.log(sumMemoized(2, 3)); // Output: 5
console.log(factorialMemoized(5)); // Output: 120
console.log(fibMemoized(6)); // Output: 8
