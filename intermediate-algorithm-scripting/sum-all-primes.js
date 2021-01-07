/**
 * Intermediate Algorithm Scripting: Sum All Primes
 * 
 * A prime number is a whole number greater than 1 with exactly two divisors: 1 and 
 * itself. For example, 2 is a prime number because it is only divisible by 1 and 
 * 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
 * 
 * Rewrite sumPrimes so it returns the sum of all prime numbers that are less than 
 * or equal to num.
 */

function isPrime(num) {
    if (num <= 1) return false;
    if (num == 2) return true;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function getPrimesArray(num) {
    let result = [];    
    for (let j = 1; j <= num; j++) {
        if (isPrime(j)) {
            result.push(j);
        }
    }    
    return result;
}

function sumPrimes(num) {
    return getPrimesArray(num).reduce((acc, curr) => acc + curr);
}