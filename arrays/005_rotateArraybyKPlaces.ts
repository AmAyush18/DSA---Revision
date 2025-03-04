
// function rotate(nums: number[], k: number): void {
//     k = k % nums.length;

//     let i: number = 0;
//     let n: number = nums.length;
//     let j: number = n - k;

//     // while (i < k && j < n) {
//     //     let temp: number = nums[i]
//     //     nums[i++] = nums[j]
//     //     nums[j++] = temp;
//     // }
//     reverse(nums, 0, n-k-1);
//     reverse(nums, n-k, n-1);
//     reverse(nums, 0, n-1);
// };

// function reverse (nums: number[], i: number, j: number) {
//     while (i < j) {
//         const temp: number = nums[i];
//         nums[i++] = nums[j];
//         nums[j--] = temp;
//     }
// }

function rotate(nums: number[], k: number): void {
    let n = nums.length;
    k = k % n;  // Handle cases where k > n

    let count = 0;  // Count of elements placed in correct positions

    for (let start = 0; count < n; start++) {
        let current = start;
        let prev = nums[start];

        do {
            let nextIdx = (current + k) % n;
            let temp = nums[nextIdx];
            nums[nextIdx] = prev;
            prev = temp;
            current = nextIdx;
            count++;
        } while (start !== current); // Stop when cycle completes
    }
}
