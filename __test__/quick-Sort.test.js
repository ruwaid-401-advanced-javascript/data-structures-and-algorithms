'use strict';

const quickSort = require('../challenges/quick-Sort/quick-Sort');

describe('quick Sort', () => {
  it('quick Sort test ', () => {
    let testArr = [8, 4, 23, 42, 16, 15];
    expect(quickSort(testArr, 0, 5)).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('quick Sort test ', () => {
    let testArr = [20, 18, 12, 8, 5, -2];
    expect(quickSort(testArr, 0, 5)).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('quick Sort test ', () => {
    let testArr = [5, 12, 7, 5, 5, 7];
    expect(quickSort(testArr, 0, 5)).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it('quick Sort test ', () => {
    let testArr = [2, 3, 5, 7, 13, 11];
    expect(quickSort(testArr, 0, 5)).toEqual([2, 3, 5, 7, 11, 13]);
  });
});