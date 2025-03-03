// Observation : 
/*  N                      XOR
    1 -> 1                  1
    2 -> 1^2                3
    3 -> 1^2^3              0
    4 -> 1^2^3^4            4

    5 -> ...                1
    6 -> ...                7
    7 -> ...                0
    8 -> ...                8

    9 -> ...                1

    We observe a pattern here, we can use this to find XOR till N in O(1) time
*/

function xorTillN(n: number) : number{

    if (n%4 === 1) return 1
    if (n%4 === 2) return n+1
    if (n%4 === 3) return 0

    return n;
}

// Xor between range [L, R] | T.C: O(1) | S.C: O(1)
function xorInRange(low: number, high: number) : number {
    let xorTillLow: number = xorTillN(low - 1);
    let xorTillHigh: number = xorTillN(high);

    // Let's understand by example, say we have to find for [4, 8]
    // xorTillLow = 1^2^3
    // xorTillHigh = 1^2^3^4^5^6^7^8
    // Now we XOR both of these-> 1-3 are XOR-ed by themselves and reduce to 0 hence leaving XOR 4-8

    return xorTillLow ^ xorTillHigh
}
console.log(xorInRange(4, 8))