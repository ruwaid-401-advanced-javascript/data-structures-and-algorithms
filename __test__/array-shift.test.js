'use strict';

const ShiftArray = require('../challenges/array-shift/array-shift.js');

describe('Array shift challenge', () => {

  it('ADD Element: Input array witout number', () => {
    expect(ShiftArray.insertShiftArray([2, 4, 6, 8])).toEqual([ 2, 4,undefined, 6, 8]);
    expect(ShiftArray.insertShiftArray([1, 2, 3, 4, 5])).toEqual([ 1, 2, 3,undefined, 4, 5]);
  });

  it('ADD Element: Input number without the array', () => {
    expect(ShiftArray.insertShiftArray([], 16)).toEqual([16]);
    expect(ShiftArray.insertShiftArray([], 28)).toEqual([28]);
  });

  it('ADD Element: Expected outcome', () => {
    expect(ShiftArray.insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    expect(ShiftArray.insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('Remove middle Element(Stretch Goal): Expected outcome', () => {
    expect(ShiftArray.deleteMiddleElement([2, 4, 5, 6, 8])).toEqual([2, 4, 6, 8]);
    expect(ShiftArray.deleteMiddleElement([4, 8, 15, 16, 23, 42])).toEqual([4, 8, 15, 23, 42]);
  });
});

