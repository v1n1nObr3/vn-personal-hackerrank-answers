//Practice > Interview Preparation Kit > Dictionaries and Hashmaps > Two Strings
function getSubStrings(expression: string, k: number): Set<string> {
    let subStringSet = new Set<string>();
    let numOperations = expression.length - k + 1;
    for (let j = 0; j < numOperations; j++) {
        let subs = expression.substring(j, j + k);
        subStringSet.add(subs);
    }
    return subStringSet;
}

function intersection<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    let _intersection = new Set<T>();
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}


function twoStrings(s1: string, s2: string) {
    let str = "NO";
    let sub1 = getSubStrings(s1, 1);
    let sub2 = getSubStrings(s2, 1);
    let inter = intersection(sub1, sub2);
    if (inter.size > 0) {
        str = "YES";
    }
    return str;
}