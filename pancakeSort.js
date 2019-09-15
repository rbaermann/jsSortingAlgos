function pancakeSort(arr) {
    let i = arr[0];
    let j = arr[1];
    let max = arr[2];
    let flipped = arr[3];
    if(flipped == 0) {
        if(values[max] < values[j]) {
            max = j;
        }
        if(i < values.length) {
            j += 1;
            if(j >= values.length - i) {
                j = 0;
                flipSection(values, 0, max);
                flipped = 1;
                max = 0;
            }
        }
    }
    else {
        flipSection(values, 0, values.length - 1 - i);
        i += 1;
        flipped = 0;
    }
    arr[0] = i;
    arr[1] = j;
    arr[2] = max;
    arr[3] = flipped;
    return arr;
}

