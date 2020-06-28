'use strict';

const insertionSort = require('../challenges/insertion-sort/insertion-sort');

describe('Insertion Sort', () => {
  it('Insertion Sort test ', () => {
    let testArr = [8, 4, 23, 42, 16, 15];
    expect(insertionSort(testArr)).toEqual([4,8, 15, 16, 23, 42]);
  });

  it('Insertion Sort test ', () => {
    let testArr = [20, 18, 12, 8, 5, -2];
    expect(insertionSort(testArr)).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('Insertion Sort test ', () => {
    let testArr = [5, 12, 7, 5, 5, 7];
    expect(insertionSort(testArr)).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it('Insertion Sort test ', () => {
    let testArr = [2,3,5,7,13,11];
    expect(insertionSort(testArr)).toEqual([2,3,5,7,11,13]);
  }); 
});