function findMaxConsecutiveOnes(nums: number[]): number {
    let cnt = 0, mx = 0;

    for (const num of nums) {
        cnt = num === 1 ? cnt + 1 : 0;
        mx = Math.max(mx, cnt);
    }

    return mx;
}
