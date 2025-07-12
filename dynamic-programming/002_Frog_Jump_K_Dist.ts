function frogJumpWithKDist (height: number[], k: number): number{
    const n: number = height.length;
    const dp: number[] = new Array(n).fill(-1);
    return findMinEnergy(height, n-1, k, dp);
}

// Recursive + Memoization  [T.C: O(N) x K  |  S.C: O(N) + O(N)]
function findMinEnergy (height: number[], ind: number, k: number, dp: number[]) : number {
    if (ind === 0) {
        return 0;
    }

    if (dp[ind] !== -1) {
        return dp[ind];
    }

    let minEnergy: number = Number.MAX_SAFE_INTEGER;

    for (let j = 1; j <= k; j++) {
        if (ind - j >= 0) {
            let jump = findMinEnergy(height, ind - j, k, dp) + Math.abs(height[ind] - height[ind-j])
            minEnergy = Math.min(jump, minEnergy);
        } else {
            break;
        }
    }

    return dp[ind] = minEnergy;
}

// Tabulation  [T.C: O(N x K)  |  S.C: O(N)]
function findMinEnergyTab (height: number[], k: number) : number {
    let n = height.length;
    const dp: number[] = new Array(n).fill(-1);

    dp[0] = 0;

    for (let i = 1; i < n; i++) {
        let minEnergy = Number.MAX_SAFE_INTEGER;

        for (let j = 1; j <= k; j++) {
            if (i - j >= 0) {
                let jump = dp[i-j] + Math.abs(height[i] - height[i-j])
                minEnergy = Math.min(minEnergy, jump)
            } else {
                break;
            }
        }

        dp[i] = minEnergy;
    }

    return dp[n-1]
}