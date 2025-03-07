// Only Positives
// Brute Force: T.C: O(N^2) | S.C: O(1)
function longestSubarray (nums: number[], k: number): number {
    let mx: number = 0

    for (let i: number = 0; i < nums.length; i++) {
        let curr: number = 0;
        for (let j: number = i; j < nums.length; j++) {
            curr += nums[j];
            if (curr === k) {
                mx = Math.max(j-i+1, mx)
            } else if (curr > k) {
                break;
            }
        }
    }

    return mx;
}

// Better Approach: T.C: O(N) | S.C: O(N) | (Optimal Approach for case where numbers could be both positive and negative)

function longestSubarray2 (nums: number[], k: number): number {
    let map: any = new Map<number, number>()
    let mx: number = 0;
    let prefixSum: number = 0;
    map.set(0, -1);
    for (let i: number = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        // If (prefixSum - k) exists in the map, we found a valid subarray
        if (map.has(prefixSum - k)) {
            mx = Math.max(mx, i - map.get(prefixSum - k)!);
        }

        // Store the prefix sum's first occurrence in the map
        if (!map.has(prefixSum)) {
            map.set(prefixSum, i);
        }
    }

    return mx;
}

// Optimal Approach for positives case: T.C: O(N) | S.C: O(1)

function longestSubarray3(nums: number[], k: number): number {
    let j: number = 0;  // Left pointer
    let mx: number = 0; // Maximum subarray length
    let ps: number = 0; // Prefix sum (current window sum)

    for (let i = 0; i < nums.length; i++) {
        ps += nums[i];

        // Shrink the window from the left if the sum exceeds k
        while (ps > k) {
            ps -= nums[j];
            j++;
        }

        // Check if we have found a subarray with sum exactly k
        if (ps === k) {
            mx = Math.max(mx, i - j + 1);
        }
    }

    return mx;
}
