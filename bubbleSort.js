function bubbleSort(arr) {
    let i = arr[0];
    let j = arr[1];
    let a = values[j];
    let b = values[j + 1];
    if(a > b) {
        swap(values, j, j + 1);
    };
    if(i < values.length) {
        j += 1;
        if(j >= values.length - i - 1) {
            j = 0;
            i += 1;
        }
    }
    arr[0] = i;
    arr[1] = j;
    return arr;
};

