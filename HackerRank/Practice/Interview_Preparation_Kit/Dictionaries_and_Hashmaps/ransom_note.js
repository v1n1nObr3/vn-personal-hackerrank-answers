//Practice > Interview Preparation Kit > Dictionaries and Hashmaps > Hash Tables: Ransom Note
function checkMagazine(magazine, note) {
    let message = "Yes";

    for (let word of note) {
        let idx = magazine.findIndex(e => e === word);

        if (idx === -1) {
            message = "No";
            break;
        }

        magazine.splice(idx, 1, "dhkjhkrhkf");
    }

    console.log(message);
}