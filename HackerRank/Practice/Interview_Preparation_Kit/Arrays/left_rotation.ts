function rotLeft(a: number[], d: number): number[] {
    let l = a.length;
    let resultArr = a.map((_, idx, arr) => arr[(idx + d) % l]);
    return resultArr;
}