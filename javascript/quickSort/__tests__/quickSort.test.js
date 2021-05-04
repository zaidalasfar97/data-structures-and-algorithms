'use strict';

const quickSort = require('../quickSort.js');

describe('Test for Quick Sort ', () => {

    it('Should quick sort', () => {
        let array = [15, 4, 22, 44, 80];

        expect(quickSort(array, 0, 4)).toEqual([4, 15, 22, 44, 80]);
    })

})