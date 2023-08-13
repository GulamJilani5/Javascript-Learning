//////////////////////////////////////////////////
////////////////////// METHOD 1
/////////////////// UDAMY WAY
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(arr1, i, j) {
    [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
  }
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // LEFT ARRAY
    quickSort(arr, left, pivotIndex - 1);
    // RIGHT ARRAY
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 1, 8, 6, 3, 5, 2, 7]));
