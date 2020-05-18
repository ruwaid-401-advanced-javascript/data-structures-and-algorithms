'use strict';

const insertShiftArray = require('../challenges/array-shift/array-shift.js');

describe('Array shift challenge', () => {

  it('Input array witout number', () => {
    expect(insertShiftArray([2, 4, 6, 8])).toEqual([undefined, 2, 4, 6, 8]);
  });

  it('Input number without the array', () => {
    expect(insertShiftArray([], 16)).toBeUndefined();
  });

  it('Expected outcome', () => {
    expect(insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});

