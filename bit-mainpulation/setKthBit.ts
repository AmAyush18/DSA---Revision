
const setKthBit = (num: number, k: number) : number => {
    let oneShift: number = 1 << k;
    let res = num | oneShift;

    return res;
}

console.log(setKthBit(10, 2))
console.log(setKthBit(15, 3))