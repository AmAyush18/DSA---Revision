// Problem URL: https://www.geeksforgeeks.org/problems/geek-jump/1

class Solution {
    minCost(height: number[]): number {
        const n: number = height.length;
        const dp: number[] = new Array(n).fill(-1);
        return this.findMinCost(n - 1, height, dp);
    }

    // Memoization 
    private findMinCost(n: number, height: number[], dp: number[]): number {
        if (n === 0) return 0;

        if (dp[n] !== -1) return dp[n];

        const left = this.findMinCost(n - 1, height, dp) + Math.abs(height[n] - height[n - 1]);

        let right = Number.MAX_SAFE_INTEGER;
        if (n > 1) {
            right = this.findMinCost(n - 2, height, dp) + Math.abs(height[n] - height[n - 2]);
        }

        dp[n] = Math.min(left, right);
        return dp[n];
    }

    // Tabulation
    private findMinCostTab(height: number[]) : number {
        let n: number = height.length
        let dp: number[] = new Array(n).fill(-1)

        dp[0] = 0
        dp[1] = height[0]

        for (let i: number = 1; i <= n-1; i++) {
            let left = dp[i - 1] + Math.abs(height[i] - height[i-1])
            let right = Number.MAX_SAFE_INTEGER
            if (i > 1) {
                right = dp[i - 2] + Math.abs(height[i] - height[i-2])
            }
            dp[i] = Math.min(left, right);
        }

        return dp[n-1];
    }
}
