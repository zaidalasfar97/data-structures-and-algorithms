'use strict';

module.exports = function insertShiftArray(arr, val) {
    let newArray = [];
    let indexOfArray = 0;
    let indexOfValue = Math.round(arr.length / 2);
    for (let i = 0; i < arr.length + 1; i++) {
        if (i === indexOfValue) {
            newArray[i] = val;
        } else {
            newArray[i] = arr[indexOfArray];
            indexOfArray++;
        }
    }
    return newArray;
}