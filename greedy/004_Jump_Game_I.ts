// LeetCode: https://leetcode.com/problems/jump-game/

function canJump(nums: number[]): boolean {
    let maxIdx = 0;

    for (let idx = 0; idx < nums.length; idx++) {
        let num = nums[idx];
        let currMax: number = idx + num;
        if (currMax > maxIdx) {
            maxIdx = currMax;
        }

        if (maxIdx >= nums.length-1) return true;

        if (num === 0 && maxIdx <= idx) return false;
    }
    return false;
};