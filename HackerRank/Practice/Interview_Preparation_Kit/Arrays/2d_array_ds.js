function hourglassSum(arr) {
    let compareArray = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let hourglass = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            compareArray.push(hourglass);
        }
    }
    let whoisTheHighest = -100;
    for (let el of compareArray) {
        if (el > whoisTheHighest) {
            whoisTheHighest = el;
        }
    }
    return whoisTheHighest;
}
;
