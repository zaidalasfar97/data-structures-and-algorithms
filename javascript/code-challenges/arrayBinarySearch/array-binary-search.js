'use strict';

module.exports = function BinarySearch(arr, key) {

    let arrayOne = 0;
    let arrayTwo = arr.length - 1;
    let index;

    if (arr.length === 0) {
        return 'please insert valid array';
    }
    while (arrayOne <= arrayTwo) {
        let newArray = Math.ceil((arrayOne + arrayTwo) / 2)
        if (arr[newArray] < key) {
            arrayOne = newArray + 1;
        } else if (arr[newArray] > key) {
            arrayTwo = newArray - 1;
        } else if (key === arr[newArray]) {
            index = newArray;
            return index;
        }
    }
    return -1;
}