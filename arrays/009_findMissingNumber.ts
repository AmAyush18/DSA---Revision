// function missingNumber(nums: number[]): number {
//     let n: number = nums.length;
//     let expectedSum: number = n * (n+1)/2;
//     let sum: number = nums.reduce((acc, curr) => acc+curr)

//     return expectedSum - sum
// };

// using xor
function missingNumber(nums: number[]): number {
    let n: number = nums.length;
    
    let xor: number = 0;
    for (let i: number = 0; i < n; i++) {
        xor = xor ^ (i+1) ^ nums[i]
    }

    return xor
};