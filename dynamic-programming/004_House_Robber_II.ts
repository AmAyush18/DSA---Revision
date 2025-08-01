// LeetCode Problem URL: https://leetcode.com/problems/house-robber-ii/description/

function rob(nums: number[]): number {
    const n = nums.length;
    const nums1: number[] = nums.filter((_, idx) => idx !== 0)
    const nums2: number[] = nums.filter((_, idx) => idx !== n-1)
    
    return Math.max(maxSumSpaceOpt(nums1), maxSumSpaceOpt(nums2))
}

// Recursive  [T.C: O(2^n)]
function maxSumRec(arr: number[], ind: number) : number {
    if (ind === 0) 
        return Math.max(0, arr[0]);

    if (ind < 0) return 0;

    let pick: number = arr[ind] + maxSumRec(arr, ind-2);

    let notPick: number = 0 + maxSumRec(arr, ind-1);

    return Math.max(pick, notPick)
}

// Memoization
function maxSumMem(arr: number[], ind: number, dp: number[]): number {
    if (ind === 0) 
        return Math.max(0, arr[0]);

    if (ind < 0) 
        return 0;

    if (dp[ind] !== -1)
        return dp[ind];

    let pick: number = arr[ind] + maxSumMem(arr, ind-2, dp);

    let notPick: number = maxSumMem(arr, ind-1, dp);

    return dp[ind] = Math.max(pick, notPick);
}

// Tabulation
function maxSumTab(arr: number[]) : number {
    const n = arr.length;
    const dp: number[] = new Array(n).fill(-1);
    dp[0] = Math.max(0, arr[0]);
    for (let i = 1; i < n; i++) {
        let pick = arr[i];  // handling i === 1
        if (i > 1) {
            pick += dp[i - 2];
        }
        let notPick = dp[i - 1];

        dp[i] = Math.max(pick, notPick);
    }

    return dp[n-1]
}

// Space Optimisation
function maxSumSpaceOpt (arr: number[]) : number {
    const n = arr.length;

    let prev: number = Math.max(0, arr[0]);
    let prev2: number = 0;

    for (let i = 1; i < n; i++) {
        let pick = arr[i];  // handling i === 1
        if (i > 1) {
            pick += prev2;
        }
        let notPick = prev;

        let curri = Math.max(pick, notPick);

        prev2 = prev;
        prev = curri;
    }

    return prev;
}