// Check if power of 2

const isPowerOfTwo = (num: number) : boolean => {
    // concept power of 2 only has 1 set bit
    // hence if we and it to one no. less of it it should be zero logically

    return (num & num-1) === 0
}

console.log(isPowerOfTwo(10))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(32))
console.log(isPowerOfTwo(46))