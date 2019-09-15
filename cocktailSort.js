function cocktailSort(arr) {
    let i = arr[0];
    let j = arr[1];
    let dir = arr[2];
    let color = arr[3];
    if(dir == 0) {
        let a = values[j];
        let b = values[j + 1];
        if(a > b) {
            swap(values, j, j + 1);
        };
        if(i < values.length / 2) {
            j += 1;
            if(j >= values.length - i - 1) {
                i += 1;
                dir = 1;
            }
        }
    }
    if(dir == 1) {
        let a = values[j];
        let b = values[j - 1];
        if(a < b) {
            swap(values, j, j - 1);
        };
        if(i < values.length / 2) {
            j -= 1;
            if(j <= -1 + i) {
                color += 1;
                dir = 0;
            }
        }
    }
    arr[0] = i;
    arr[1] = j;
    arr[2] = dir;
    arr[3] = color;
    return arr;
}