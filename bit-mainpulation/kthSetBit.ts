
const isKthBitSet = (num: number, k: number) : boolean => {
    let oneShift: number = 1 << k;
    let res = num & oneShift;

    return res !== 0;
}

console.log(isKthBitSet(4, 0))
console.log(isKthBitSet(4, 1))
console.log(isKthBitSet(4, 2))
console.log(isKthBitSet(500, 3))