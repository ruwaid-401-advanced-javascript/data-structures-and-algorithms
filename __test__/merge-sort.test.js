'use strict';

const mergeSort = require('../challenges/merge-sort/merge-sort');

describe('Merge Sort', () => {
  it('Merge Sort test ', () => {
    let testArr = [8, 4, 23, 42, 16, 15];
    expect(mergeSort(testArr)).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('Merge Sort test ', () => {
    let testArr = [20, 18, 12, 8, 5, -2];
    expect(mergeSort(testArr)).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('Merge Sort test ', () => {
    let testArr = [5, 12, 7, 5, 5, 7];
    expect(mergeSort(testArr)).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it('Merge Sort test ', () => {
    let testArr = [2, 3, 5, 7, 13, 11];
    expect(mergeSort(testArr)).toEqual([2, 3, 5, 7, 11, 13]);
  });
});