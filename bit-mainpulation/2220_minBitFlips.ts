// leetCode url: https://leetcode.com/problems/minimum-bit-flips-to-convert-number/

function minBitFlips(start: number, goal: number): number {
    let bitsToFlip: number = start ^ goal;

    let numOfFlips: number = 0;
    while (bitsToFlip) {
        bitsToFlip &= (bitsToFlip - 1);
        ++numOfFlips;
    }

    return numOfFlips;
};