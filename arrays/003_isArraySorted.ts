function arraySortedOrNot(arr: Array<number>) : boolean {
    for (let idx: number = 1; idx < arr.length; idx++) {
        if (arr[idx] < arr[idx-1]) return false;
    }
    return true;
}