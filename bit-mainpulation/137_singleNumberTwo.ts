// Approach - 1  | T.C: N log n + n/3
// function singleNumber(nums: number[]): number {
//     nums.sort()

//     let ans: number = 0;
//     let n: number = nums.length;

//     for (let i = 1; i < n; i+=3) {
//         if (nums[i] !== nums[i-1]) {
//             return nums[i-1];
//         }
//     }

//     return nums[n-1];
// };

// Approach - 2 (Bitwise) | T.C: O(N x 32)
// function singleNumber(nums: number[]): number {

//     let ans: number = 0;

//     // Here we will basically count at each bitIdx how many number of ones and 0s are present
//     for (let bitIdx = 0; bitIdx < 32; bitIdx++) {
//         let count = 0;
//         for (const num of nums) {
//             // check if ith bit is set
//             if (num & (1 << bitIdx)) {
//                 count++;
//             }
//         }
//         // If the count of `bitIdx`-th set bit is not a multiple of 3, set it in `ans` 
//         if (count % 3 === 1) {
//             ans = ans | (1 << bitIdx);
//         }
//     }

//     return ans;
// };

// Approach - 3 (Bitwise Bucket Approach) | T.C: O(N)
function singleNumberTwo(nums: number[]): number {

    // we have 3 vars -> ones, twos and threes
    // number will go to ones, IF NOT in twos
    // number will go to twos, IF NOT in ones

    // here for adding we use XOR

    let ones: number = 0;
    let twos: number = 0;

    for (let i = 0; i < nums.length; i++) {
        ones = (ones ^ nums[i]) & ~twos;
        twos = (twos ^ nums[i]) & ~ones;
    }

    return ones;
};