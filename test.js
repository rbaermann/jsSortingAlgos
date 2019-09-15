let values = [];

let w = 300;
let arr = [0, 0, 0, 0];
let insertionArr = [1, 0];

function setup() {
    createCanvas(window.innerWidth - 10, window.innerHeight - 100);
    values = new Array(floor(width / w));
    for(let i = 0; i < values.length; i++) {
        values[i] = random(height);
    }
}

function draw() {
    background(255);
    
    //BUBBLE
    // arr = bubbleSort(arr);
    // if(arr[0] > values.length - 1) {
    //     noLoop();
    // }

    // for(let i = 0; i < values.length; i++) {
    //     stroke(200);
    //     if(arr[0] < values.length - i) {
    //         fill(51);
    //     }
    //     else {
    //         fill(0, 128, 0);
    //     }
    //     if(arr[1] == i && arr[0] < values.length - i) {
    //         fill(128, 0, 0);
    //     }
    //     rect(i * w, height - values[i], w, values[i]);
    // }

    //SELECTION
    // arr = selectionSort(arr);
    // if(arr[0] > values.length - 1) {
    //     noLoop();
    // }

    // for(let i = 0; i < values.length; i++) {
    //     stroke(200);
    //     if(arr[0] <= 0 + i) {
    //         fill(51);
    //     }
    //     else {
    //         fill(0, 128, 0);
    //     }
    //     if(arr[2] == i) {
    //         fill(128, 0, 0);
    //     }
    //     rect(i * w, height - values[i], w, values[i]);
    // }

    //COCKTAIL
    // arr = cocktailSort(arr);
    // if(arr[0] > values.length / 2) {
    //     noLoop();
    // }

    // for(let i = 0; i < values.length; i++) {
    //     stroke(200);
    //     if(arr[0] < values.length - i && arr[3] <= i) {
    //         fill(51);
    //     }
    //     else {
    //         fill(0, 128, 0);
    //     }
    //     if(arr[1] == i && arr[0] < values.length - i) {
    //                 fill(128, 0, 0);
    //             }
    //     rect(i * w, height - values[i], w, values[i]);
    // }

    //INSERTION
    // insertionArr = insertionSort(insertionArr);
    // if(insertionArr[0] > values.length - 1) {
    //     noLoop();
    // }

    // for(let i = 0; i < values.length; i++) {
    //     stroke(200);
    //     if(insertionArr[0] < i) {
    //         fill(51);
    //     }
    //     else {
    //         fill(0, 128, 0);
    //     }
    //     if(i == insertionArr[1] && insertionArr[0] < values.length - 1) {
    //         fill(128, 0, 0);
    //     }
    //     rect(i * w, height - values[i], w, values[i]);
    // }

    //PANCAKE
    // arr = pancakeSort(arr);
    // if(arr[0] > values.length - 1) {
    //     noLoop();
    // }

    // for(let i = 0; i < values.length; i++) {
    //     stroke(200);
    //     if(arr[0] < values.length - i) {
    //         fill(51);
    //     }
    //     else {
    //         fill(0, 128, 0);
    //     }
    //     if(arr[2] == i && arr[0] < values.length - i) {
    //                 fill(128, 0, 0);
    //             }
    //     rect(i * w, height - values[i], w, values[i]);
    // }

    //BOGO
    let sorted = bogoSort();
    if(sorted == true) {
        noLoop();
    }

    for(let i = 0; i < values.length; i++) {
        stroke(200);
        if(sorted == false) {
            fill(51);
        }
        else {
            fill(0, 128, 0);
        }
        rect(i * w, height - values[i], w, values[i]);
    }


}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function flipSection(arr, a, b) {
    for(let i = a; i < b / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[b - i];
        arr[b - i] = temp;
    }
}

