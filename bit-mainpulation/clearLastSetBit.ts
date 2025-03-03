// clear Last set bit (rightmost)
const clearLastSetBit = (num: number) : number => {

    // Observation : E.g: 40 -> 1 0 1 0 0  then 39 -> 1 0 0 1 1 
    // meaning just one lesser the number gets 0 on the last set bit and everything before that turns 1
    let res: number = num & num - 1;

    return res;
}

console.log(clearLastSetBit(10))
console.log(clearLastSetBit(15))