function selectionSort(arr) {
    let i = arr[0];
    let j = arr[1];
    temp = arr[2];
    if(values[temp] > values[j]) {
        temp = j;
    }
    if(i < values.length) {
        j += 1;
        if(j > values.length - 1) {
            swap(values, i, temp);
            i += 1;
            j = i;
            temp = i;
        }
    }
    arr[0] = i;
    arr[1] = j;
    arr[2] = temp;
    return arr;
};