//Practice > Interview Preparation Kit > Dictionaries and Hashmaps > Sherlock and Anagrams
function getRepeatedSubStrings(expression, k) {
    let subStringSet = [];
    let numOperations = expression.length - k + 1;
    for (let j = 0; j < numOperations; j++) {
        let subs = expression.substring(j, j + k);
        subStringSet.push(subs);
    }
    return subStringSet;
}

function compareStrings(str1, str2) {
    let counter = 0;
    let sorted1 = str1.split("").sort();
    let sorted2 = str2.split("").sort();
    if (sorted1.length !== sorted2.length) {
        return false;
    }
    else {
        for (let i = 0; i < sorted1.length; i++) {
            if (sorted1[i] === sorted2[i]) {
                counter++;
            }
        }
        if (counter === sorted1.length) {
            return true;
        }
        else {
            return false;
        }
    }
}

function sherlockAndAnagrams(s) {
    let counter = 0;
    let n = s.length;
    let k = n - 1;
    while (0 < k) {
        let subs = getRepeatedSubStrings(s, k);
        let i = 0;
        while (i < subs.length) {
            let j = i + 1;
            while (j < subs.length) {
                compareStrings(subs[i], subs[j]) && counter++;
                j++;
            }
            i++;
        }
        k--;
    }
    return counter;
}