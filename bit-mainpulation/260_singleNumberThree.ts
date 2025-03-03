// Brute Force | T.C -> N log m + m | S.C: O(m) m = n/2 + 1
// function singleNumber(nums: number[]): number[] {
//     let freqMap = new Map()

//     let ans: number[] = []

//     for (const num of nums) {
//         freqMap.set(num, (freqMap.get(num) || 0) + 1);
//     }

//     for (const [key, value] of freqMap) {
//         if (value === 1) ans.push(key)
//     }

//     return ans
// };

// Approach 2 (Bitwise Bucket Approach) | T.C: O(n) + O(n) = O(n) | S.C: O(1)
function singleNumberThree(nums: number[]): number[] {
    
    // Step - 1 : XOR all values
    let xor: number = nums.reduce((acc, curr) => acc ^ curr, 0);
    
    // Step - 2 : We find the last set bit
    // We are sure that there are two distinct numbers, so for sure they will have atleast one varying set bit
    let lastSetBit: number = (xor & xor-1) ^ xor;

    // Step - 3 : We make ans array (consoder it as two buckets at both 0, 1 idx)
    let ans: number[] = [0, 0];

    // Step - 4 : Collect numbers in each bucket based on if the lastSetBit we found is set or not
    nums.forEach(num => {
        if (num & lastSetBit) {
            ans[0] ^= num;
        } else {
            ans[1] ^= num;
        }
    })

    return ans
};