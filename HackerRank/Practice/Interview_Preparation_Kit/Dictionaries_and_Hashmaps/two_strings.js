//Practice > Interview Preparation Kit > Dictionaries and Hashmaps > Two Strings
function getSubStrings(expression, k) {
    let subStringSet = new Set();
    let numOperations = expression.length - k + 1;
    for (let j = 0; j < numOperations; j++) {
        let subs = expression.substring(j, j + k);
        subStringSet.add(subs);
    }
    return subStringSet;
}

function intersection(setA, setB) {
    let _intersection = new Set();
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}

function twoStrings(s1, s2) {
    let str = "NO";
    let sub1 = getSubStrings(s1, 1);
    let sub2 = getSubStrings(s2, 1);
    let inter = intersection(sub1, sub2);
    if (inter.size > 0) {
        str = "YES";
    }
    return str;
}