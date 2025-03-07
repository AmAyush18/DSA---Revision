function twoSum(nums: number[], target: number): number[] {
    let map = new Map<number, number>();
    let ans: number[] = [];

    for (let i: number = 0; i < nums.length; i++ ) {
        if (map.has(target - nums[i])) {
            ans.push(map.get(target-nums[i])!)
            ans.push(i);
            break;
        }
        map.set(nums[i], i);
    }

    return ans;
};