function BinarySearch(arr, key) {
  let start = 0;
  let end = arr.length;
  if (!key || !arr) return -1;
  while (arr.length) {
    let mid = Math.floor((end - start) / 2) + start;
    if (arr[mid] === key) return mid;
    if (start >= end) return -1;
    if (arr[mid] > key) end = mid - 1;
    if (arr[mid] < key) start = mid + 1;
  }
}

module.exports = BinarySearch;
