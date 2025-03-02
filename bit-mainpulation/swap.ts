const swap = (num1: number, num2: number) => {

    // Concept: x ^ x = 0

    num1 = num1 ^ num2;
    num2 = num1 ^ num2;  // -> (num1 ^ num2) ^ num2 => num1
    num1 = num1 ^ num2; // -> (num1 ^ num2) ^ num1  => num2

    console.log({num1, num2});
}

swap(4, 6);