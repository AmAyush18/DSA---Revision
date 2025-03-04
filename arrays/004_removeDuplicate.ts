// function removeDuplicates(nums: number[]): number {
    
//     let k: number = 0;

//     for (let i: number = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[k]) {
//             nums[++k] = nums[i]
//         }
//     }
//     return k+1;
// };

// More JS Specific but not so great one....
function removeDuplicates(nums: number[]): number {
    let ans = nums.filter((val, index) => nums.indexOf(val) === index);
    nums.length = 0
    nums.push(...ans)
    return nums.length;
}
