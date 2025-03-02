
const clearKthBit = (num: number, k: number) : number => {
    let oneShift: number = 1 << k;
    let reversedOneShift: number = ~ oneShift;
    let res: number = num & reversedOneShift;

    return res;
}

console.log(clearKthBit(10, 1))
console.log(clearKthBit(15, 0))