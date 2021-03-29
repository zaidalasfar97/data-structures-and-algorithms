const insertShiftArray = require('../code-challenges/arrayShift/array-shift.js');

describe('arrayShift ', () => {
  it('InsertShiftArray() give a valid', () => {
    const arr = [1, 2, 3, 4];
    const val = 0;
    expect(insertShiftArray(arr, val)).toEqual([1, 2, 0, 3, 4]);
  });
  it('insertShiftArray() give a valid', () => {
    let arr = [1, 2, 3, 4, 5];
    let val = 13;
    expect(insertShiftArray(arr, val)).toEqual([1, 2, 3, 13, 4, 5]);
  });
});

