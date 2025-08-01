// LeetCode: https://leetcode.com/problems/lemonade-change/description/

function lemonadeChange(bills: number[]): boolean {
    let five = 0, ten = 0;

    for (const bill of bills) {
        if (bill === 5) {
            five++;
        } else if (bill === 10) {
            if (five === 0) return false;
            five--;
            ten++;
        } else {
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
}
