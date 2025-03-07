// // Brute Force Approach
// function closestPrimes(left: number, right: number): number[] {
//     let pa: number[] = [];
//     findPrimes(pa, left, right);
//     if (pa.length <= 1) return [-1, -1]
//     if (pa.length === 2) return [pa[0], pa[1]]
//     let min = Number.MAX_VALUE;
//     let ans: number[] = [];

//     for (let i = 0; i < pa.length; i++) {
//         for (let j = i+1; j < pa.length; j++) {
//             if (min > pa[j] - pa[i]) {
//                 min = pa[j] - pa[i];
//                 ans.length = 0;
//                 ans.push(pa[i]);
//                 ans.push(pa[j]);
//             }
//         }
//     }

//     return ans;
// };

// function findPrimes (arr: number[], left: number, right: number): void {
//     for (let i = left; i <= right; i++) {
//         if (isPrime(i)) {
//             arr.push(i)
//         }
//     }
// }

// function isPrime(num: number): boolean {
//     if (num <= 1) return false;
//     if (num === 2) return true;
//     if (num % 2 === 0) return false;

//     for (let i = 3; i * i <= num; i += 2) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// Optimised Approach -> T.C: O(N log log N) + O(N) ≈ O(N log log N) | S.C: O(N)
// function closestPrimes(left: number, right: number): number[] {
//     const primes = sieve(right); // Precompute primes up to 'right'
//     let prev = -1, minDiff = Infinity;
//     let ans: number[] = [-1, -1];

//     for (let i = left; i <= right; i++) {
//         if (primes[i]) {
//             if (prev !== -1 && i - prev < minDiff) {
//                 minDiff = i - prev;
//                 ans = [prev, i];
//             }
//             prev = i;
//         }
//     }
//     return ans;
// }

// // Optimized Prime Computation using Sieve of Eratosthenes (O(N log log N))
// function sieve(n: number): boolean[] {
//     const isPrime = new Array(n + 1).fill(true);
//     isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime

//     for (let i = 2; i * i <= n; i++) {
//         if (isPrime[i]) {
//             for (let j = i * i; j <= n; j += i) {
//                 isPrime[j] = false;
//             }
//         }
//     }
//     return isPrime;
// }


/*
Optional: Further optimised to only store Primes
*/

function closestPrimes(left: number, right: number): number[] {
    const primes = getPrimes(right); // Get all primes ≤ right
    let ans: number[] = [-1, -1], minDiff = Infinity;
    
    // Only iterate over primes in range
    let prev = -1;
    for (let p of primes) {
        if (p < left) continue; // Skip primes before 'left'
        if (prev !== -1 && p - prev < minDiff) {
            minDiff = p - prev;
            ans = [prev, p];
        }
        prev = p;
    }
    return ans;
}

// 🚀 Optimized Sieve (Only Stores Primes Instead of Boolean Array)
function getPrimes(n: number): number[] {
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    let primes: number[] = [];

    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i); // Store only primes
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return primes;
}
