// Given an array of integers, check if it is possible to partition the array into some number of subsequences of
// length k each, such that:
// - each element in the array occurs in exactly one subsequence.
// - for each subsequence all numbers are distinct. Element in the array having the same value must
//   be in different substances

function canPartitionArray(arr, k) {
  if (arr.length % k !== 0) {
    return false; // If total number of elements is not a multiple of k, we can't partition
  }
  const countObj = {};
  // Count occurrences of each element
  for (let num of arr) {
    countObj[num] = (countObj[num] || 0) + 1;
  }
  const subsequencesNeeded = arr.length / k;
  // Check if any number occurs more times than we have subsequences
  for (let key in countObj) {
    if (countObj[key] > subsequencesNeeded) {
      return false;
    }
  }
  return true;
}

// Example usage:
const arr = [1, 2, 3, 1, 2, 3, 4, 4];
const k = 2;
console.log(canPartitionArray(arr, k)); // Output: true

const arr2 = [1, 2, 3, 1, 2, 2];
const k2 = 3;
console.log(canPartitionArray(arr2, k2)); // Output: false
