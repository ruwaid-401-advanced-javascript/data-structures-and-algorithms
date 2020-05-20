function BinarySearch(arr, key) {
  let start = 0;
  let end = arr.length;
  while (arr.length && key) {
    let mid = Math.floor((end - start) / 2) + start;
    if (arr[mid] === key) return mid;
    if (start >= end) return -1;
    if (arr[mid] > key) end = mid - 1;
    if (arr[mid] < key) start = mid + 1;
  }
  return -1;
}

module.exports = BinarySearch;
