function insertionSort(arr) {
    let i = arr[0];

    while(values[i] < values[i - 1]) {
        swap(values, i, i - 1);
        i--
    }
    arr[1] = i;
    arr[0] += 1;
    return arr;
}