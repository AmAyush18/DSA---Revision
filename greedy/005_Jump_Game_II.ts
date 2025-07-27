function jump(nums: number[]): number {
    // recursive approach
    // return recur(nums, 0, 0);

    // dynamic solution - TODO : Quadratic

    // greedy approach // O(N)
    let left = 0;
    let right = 0;
    let jumps = 0;

    while (right < nums.length - 1){
        let farthest = 0;
        for (let i = left; i <= right; i++) {
            farthest = Math.max(farthest, nums[i] + i);
        }
        left = right + 1;
        right = farthest;
        jumps++;
    }

    return jumps;
};

// function recur(nums: number[], idx: number, jumps: number): number {
//     if (idx >= nums.length - 1) return jumps;

//     let minJumps: number = Number.MAX_SAFE_INTEGER;
//     for (let i = 1; i <= nums[idx]; i++) {
//         minJumps = Math.min(minJumps, recur(nums, idx+i, jumps+1));
//     }

//     return minJumps;
// }