function minimumSwaps(arr) {
    let counter = 0;

    for (let j = 1; j > 0; j++) {
        
        if (arr.length === 0) {
            break;
        }

        let index = arr.indexOf(j);
        
        if (index === 0) {
            arr.shift();
        }

        else {
            arr[index] = arr[0];
            counter++;
            arr.shift();
        }

    }

    return counter;
}