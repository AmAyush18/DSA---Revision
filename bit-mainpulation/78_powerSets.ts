// Leetcode problem url: https://leetcode.com/problems/subsets/description/

function subsets(nums: number[]): number[][] {
    let subsetsList: number[][] = [];

    const len: number = nums.length;
    const totalSubsets: number = 1 << len;

    for (let num: number = 0; num < totalSubsets; num++) {
        let currSet: number[] = [];
        for (let i: number = 0; i < len; i++) {
            // check if ith bit is set
            if (num & (1 << i)) {
                currSet.push(nums[i]);
            }
        }
        subsetsList.push(currSet);
    }

    return subsetsList;
};