
const toggleKthBit = (num: number, k: number) : number => {
    let oneShift: number = 1 << k;
    let res: number = num ^ oneShift;

    return res;
}

console.log(toggleKthBit(10, 1))
console.log(toggleKthBit(15, 0))