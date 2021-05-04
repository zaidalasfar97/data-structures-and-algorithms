const mergeSort = require('./mergeSort.js');

describe('merge Sort Check ', () => {

    it('Should Reverse-sorted', () => {
        let array = [20, 18, 12, 8, 5, -2];
        let results = mergeSort(array);
        expect(results).toEqual([-2, 5, 8, 12, 18, 20]);
    });

    it('Should Few uniques ', () => {
        let array = [5, 12, 7, 5, 5, 7];
        let results = mergeSort(array);
        expect(results).toEqual([5, 5, 5, 7, 7, 12]);
    });

    it('Should Nearly-sorted ', () => {
        let array = [2, 3, 5, 7, 13, 11];
        let results = mergeSort(array);
        expect(results).toEqual([2, 3, 5, 7, 11, 13]);
    });


});