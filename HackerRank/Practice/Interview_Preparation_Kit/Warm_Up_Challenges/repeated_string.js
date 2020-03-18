function repeatedString(s, n) {
    let count = 0;
    if (s.length === 0) {
        return count;
    }
    else if (s.length === 1) {
        if (s[0] === "a") {
            return n;
        }
        else {
            return count;
        }
    }
    else {
        let rest = n % s.length;
        let crest = 0;
        for (let i = 0; i < rest; i++) {
            if (s[i] === "a") {
                crest++;
            }
        }
        for (let char of s) {
            if (char === "a") {
                count++;
            }
        }
        let int = Math.floor(n / s.length);
        return (count * int) + crest;
    }
}
