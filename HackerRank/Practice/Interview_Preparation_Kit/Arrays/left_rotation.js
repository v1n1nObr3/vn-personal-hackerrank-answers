function rotLeft(a, d) {
    let l = a.length;
    let resultArr = a.map((_, idx, arr) => arr[(idx + d) % l]);
    return resultArr;
}
