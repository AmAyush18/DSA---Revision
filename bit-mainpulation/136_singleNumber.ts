// Leetcode Problem: https://leetcode.com/problems/single-number/

function singleNumber(nums: number[]): number {
    let ans: number = nums[0];

    for (let i: number = 1; i < nums.length; i++) {
        ans ^= nums[i];
    }

    return ans;
};