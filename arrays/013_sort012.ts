// function sortColors(nums: number[]): void {
//     let zeroes: number = 0;
//     let ones: number = 0;
//     let twos: number = 0;

//     let i = 0;

//     for (; i < nums.length; i++) {
//         if (nums[i] === 0) zeroes++;
//         else if (nums[i] === 1) ones++;
//         else twos++;
//     }
//     for (i = 0; i < zeroes; i++) nums[i] = 0
//     for (i = zeroes; i < zeroes+ones; i++) nums[i] = 1
//     for (i = zeroes+ones; i < nums.length; i++) nums[i] = 2
// }

function sortColors(nums: number[]): void {
    let low: number = 0;
    let mid: number = 0;
    let high: number = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            swapNum(nums, low, mid);
            mid++;
            low++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            swapNum(nums, mid, high);
            high--;
        }
    }
};

function swapNum (nums: number[], i: number, j: number): void {
    const temp: number = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}