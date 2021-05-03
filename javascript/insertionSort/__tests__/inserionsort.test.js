'use strict';

const insertionSort = require('../Insertionsort.js');

describe('Insertion Sort check', () => {

    it('Should sort the array', () => {
        let array = [8, 4, 23, 42, 16, 15];
        expect(insertionSort(array)).toEqual([4, 8, 15, 16, 23, 42]);
    })

    it('Should sort reverse array', () => {
        let array = [20, 18, 12, 8, 5, -2];
        expect(insertionSort(array)).toEqual([-2, 5, 8, 12, 18, 20]);
    })

    it('Should sort few uniques array', () => {
        let array = [5, 12, 7, 5, 5, 7];
        expect(insertionSort(array)).toEqual([5, 5, 5, 7, 7, 12]);
    })

})