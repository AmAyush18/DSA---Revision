
function largestElement (arr: Array<number>) {
    return arr.reduce((acc, curr) => acc > curr ? acc : curr, arr[0])
}

console.log(largestElement([7,8,9,1,3,456,1,-5,6,-9,4523,4535,5,-23414]))