'use strict';

let newArray = [1, 2, 3, 4, 5, 6];

function reverseArray(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
};

reverseArray(newArray);
