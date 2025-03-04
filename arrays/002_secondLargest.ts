// function secondLargest (arr: Array<number>) : number {
//     let ans = Number.MIN_SAFE_INTEGER
    
//     arr.reduce((acc, curr) => {
//         if (curr > acc) {
//             ans = acc
//             return curr
//         } else if (curr > ans && curr < acc) {
//             ans = curr
//         }
//         return acc
//     }, arr[0])

//     return ans
// }

// simpler version
function secondLargest(arr: number[]): number {
    if (arr.length < 2) return Number.MIN_SAFE_INTEGER; 

    let first = Number.MIN_SAFE_INTEGER;
    let second = Number.MIN_SAFE_INTEGER;

    for (const num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    return second === Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : second;
}

console.log(secondLargest([9, 9, 8, 3, 2, 6, 6, -22, -24, 11, 11, 4, 5]))