'use strict';

function insertShiftArray(arr, valueToBeAdded) {
  let newArr = [];
  for (let i = 0; i < arr.length;) {

    if (valueToBeAdded > arr[i]) {
      newArr[i] = arr[i];
      i++;
    } else {
      newArr[i] = valueToBeAdded;
      for (let j = i ; j < arr.length; j++) {
        newArr[j+1] = arr[j];
      }
      return newArr;
    }

  }
}


console.log(insertShiftArray([],5));

module.exports = insertShiftArray;
