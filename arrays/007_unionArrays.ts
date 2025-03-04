// T.C: O(m+n)
function findUnion(a: number[], b: number[]) {
    let i: number = 0, j: number = 0;
    let m: number = a.length, n: number = b.length;
    let union: number[] = [];

    while (i < m && j < n) {
        if (union.length > 0 && union[union.length - 1] === a[i]) {
            i++; // Skip duplicate in `a`
            continue;
        }
        if (union.length > 0 && union[union.length - 1] === b[j]) {
            j++; // Skip duplicate in `b`
            continue;
        }

        if (a[i] < b[j]) {
            union.push(a[i++]);
        } else if (a[i] > b[j]) {
            union.push(b[j++]);
        } else { // If both are equal, push only once
            union.push(a[i]);
            i++;
            j++;
        }
    }

    while (i < m) {
        if (union.length === 0 || union[union.length - 1] !== a[i]) {
            union.push(a[i]);
        }
        i++;
    }

    while (j < n) {
        if (union.length === 0 || union[union.length - 1] !== b[j]) {
            union.push(b[j]);
        }
        j++;
    }

    return union;
}

// T.C: O((m+n) log(m+n)) slightly worse but made for js
function findUnionForJS(a: number[], b: number[]) {
    return [...new Set([...a, ...b])].sort((x, y) => x - y);
}