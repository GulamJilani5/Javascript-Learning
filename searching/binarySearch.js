//////////////////////////////////////////////////
////////////////////////////METHOD 1
/////// ITERATIVE WAY TO IMPLEMENT(DIVIDE AND CONQUER)

function binarySearch(arr, value) {
    let min = 0;
    let max = arr.length - 1;
    let middle = Math.floor((min + max) / 2);
    console.log(min, max);
    while (min <= max) {
      middle = Math.floor((min + max) / 2);
      console.log(arr[middle]);
      if (arr[middle] < value) {
        min = middle + 1;
      } else if (arr[middle] > value) {
        max = middle - 1;
      } else {
        return true;
      }
    }
    return false;
  }
  const arr = [1, 3, 5, 8, 10, 11, 12, 20, 23, 30];
  if (binarySearch(arr, 12)) console.log("Value is found");
  else console.log("Value is not found");
  
  //////////////////////////////
  /////////////////// METHOD 2
  //////////// UDEMY SOLUTION - RETURN INDEX OTHERWISE RETURN -1
  /*
  function binarySearch(arr, value) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    // console.log(left, middle, right);
    while (arr[middle] !== value && left <= right) {
      if (value < arr[middle]) right = middle - 1;
      else left = middle + 1;
      middle = Math.floor((left + right) / 2);
    }
    if (arr[middle] === value) return middle;
    return -1;
  }
  
  const arr = [1, 3, 5, 8, 10, 11, 12, 20, 23, 30];
  console.log(binarySearch(arr, 12));
  */
  //////////////////////////////
  /////////////////// METHOD 3
  //////////// RECURSION
  
  let recursiveFunction = function (arr, value, start, end) {
    // Base Condition
    if (start > end) return false;
  
    // Find the middle index
    let mid = Math.floor((start + end) / 2);
  
    // Compare mid with given value
    if (arr[mid] === value) return true;
  
    // If element at mid is greater than value,
    // search in the left half of mid
    if (arr[mid] > value) return recursiveFunction(arr, value, start, mid - 1);
    // If element at mid is smaller than value,
    // search in the right half of mid
    else return recursiveFunction(arr, value, mid + 1, end);
  };
  
  // Driver code
  let arr = [1, 3, 5, 7, 8, 9];
  let value = 5;
  
  if (recursiveFunction(arr, value, 0, arr.length - 1))
    document.write("Element found!<br>");
  else document.write("Element not found!<br>");
  