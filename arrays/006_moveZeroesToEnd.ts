/**
 Do not return anything, modify nums in-place instead.
 */
// function moveZeroes(nums: number[]): void {
//     let count: number = 0;
//     let curr: number = 0;
//     let n: number = nums.length;

//     for (let i: number = 0; i < n; i++) {
//         if (nums[i] !== 0) {
//             nums[curr++] = nums[i];
//         }
//     }

//     while (curr < n) {
//         nums[curr++] = 0;
//     }
// };

function moveZeroes(nums: number[]): void {
    
    let j: number = -1;
    let i: number = 0;

    for (; j === -1 && i < nums.length; i++) {
        if (nums[i] === 0) j = i;
    }

    for (; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j++] = nums[i]
            nums[i] = 0
        }
    }
};