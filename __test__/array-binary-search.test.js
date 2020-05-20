'use strict';

const binarySearch = require('../challenges/array-binary-search/array-binary-search.js');

describe('Binary Search challenge', () => {

  it('not a number', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8])).toEqual(-1);
    expect(binarySearch([4, 8, 15, 16, 23, 42])).toEqual(-1);
  });

  it('Find number not a in the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 9)).toEqual(-1);
    expect(binarySearch([4, 8, 15, 16, 23, 42], 5)).toEqual(-1);
    expect(binarySearch([4, 8, 15, 16, 23, 42], 2)).toEqual(-1);
    expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1);
  });

  it('Edge cases', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 1)).toEqual(0);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8)).toEqual(7);
    expect(binarySearch([4, 8, 15, 16, 23, 42], 42)).toEqual(5);
    expect(binarySearch([4, 8, 15, 16, 23, 42], 4)).toEqual(0);
  });

  it('Find a number in the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 2)).toEqual(1);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual(2);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual(3);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5)).toEqual(4);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 6)).toEqual(5);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 7)).toEqual(6);
    expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
    expect(binarySearch([4, 8, 15, 16, 23, 42], 8)).toEqual(1);
    expect(binarySearch([4, 8, 15, 16, 23, 42], 23)).toEqual(4);
  });

});

