// function intersection(nums1: number[], nums2: number[]): number[] {
//     let set1 = new Set(nums1);
//     let set2 = new Set(nums2);
    
//     let ans: number[] = [];
    
//     for (const num of set1) {
//         if (set2.has(num)) {
//             ans.push(num);
//         }
//     }
    
//     return ans;
// }

// function intersection(nums1: number[], nums2: number[]): number[] {
//     const freq: Record<number, boolean> = {};

//     nums1.forEach(num => freq[num] = true);

//     return nums2.filter(num => {
//         if (freq[num]) {
//             delete freq[num]; // Ensures unique values in the result
//             return true;
//         }
//         return false;
//     });
// }

// function intersection(nums1: number[], nums2: number[]): number[] {
//     const map = new Map<number, boolean>();

//     nums1.forEach(num => map.set(num, true));

//     return nums2.filter(num => {
//         if (map.has(num)) {
//             map.delete(num);
//             return true;
//         }
//         return false;
//     });
// }

function intersection(nums1: number[], nums2: number[]): number[] {
    const set = new Set<number>(nums2)
    return [... new Set(nums1.filter(num => set.has(num)))]
}