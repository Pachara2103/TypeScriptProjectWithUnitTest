export function merge(coll1: number[], coll2: number[], coll3: number[]): number[] {
    const result: number[] = [];
    let p1 = 0;
    let p2 = 0;
    let p3 = coll3.length - 1;

    const len1 = coll1.length;
    const len2 = coll2.length;

    while (p1 < len1 || p2 < len2 || p3 >= 0) {
        const val1: number = p1 < len1 ? coll1[p1]! : Infinity;
        const val2: number = p2 < len2 ? coll2[p2]! : Infinity;
        const val3: number = p3 >= 0 ? coll3[p3]! : Infinity;

        if (val1 <= val2 && val1 <= val3) {
            result.push(val1);
            p1++;
        } else if (val2 <= val1 && val2 <= val3) {
            result.push(val2);
            p2++;
        } else {
            result.push(val3);
            p3--;
        }
    }

    return result;
}

