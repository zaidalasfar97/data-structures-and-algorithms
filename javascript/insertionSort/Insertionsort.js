'use strict';

function insertionSort(array) {
    for (let index = 1; index < array.length; index++) {
        let j = index - 1;
        let value = array[index];
        while (j >= 0 && value < array[j]) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = value;
    }
    return array;
}
