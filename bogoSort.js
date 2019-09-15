function bogoSort() {
    let sorted = true;
    let a = values.length - 1;
    while(a >= 0) {
        let b = Math.floor(Math.random() * a + 1);
        let temp = values[b];
        values[b] = values[a];
        values[a] = temp;
        a--;
    }
    for(let i = 0; i < values.length; i++) {
        if(values[i] > values[i + 1]) {
            sorted = false;
        }
    }
    return sorted;
}