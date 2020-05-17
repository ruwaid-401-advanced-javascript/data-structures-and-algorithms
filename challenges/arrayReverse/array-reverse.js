function reverseArray(array) {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray[reversedArray.length] = array[i];
  }
  return reversedArray;
}

module.exports = reverseArray;

// test the function
let array = [1, 2, 3, 4, 5];
console.log('Array bfore calling the reverse function: ', array);
console.log('Array after calling the reverse function: ', reverseArray(array));
