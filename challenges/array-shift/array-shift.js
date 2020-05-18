'use strict';

function insertShiftArray(arr, valueToBeAdded) {
  let newArr = [];
  let index = 0;
  if (arr.length % 2 === 0) index = arr.length / 2;
  else { index = Math.floor(arr.length / 2) + 1; }

  for (let i = 0; i < index; i++) {
    newArr[i] = arr[i];
  }

  newArr[newArr.length] = valueToBeAdded;

  for (let j = index + 1; j < arr.length + 1; j++) {
    newArr[j] = arr[j - 1];
  }
  return newArr;
}

function deleteMiddleElement(arr) {

  let index = 0;
  if (arr.length % 2 === 0) index = arr.length / 2;
  else { index = Math.floor(arr.length / 2); }

  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
  return arr;
}

module.exports = {
  insertShiftArray: insertShiftArray,
  deleteMiddleElement:deleteMiddleElement,
} ;
