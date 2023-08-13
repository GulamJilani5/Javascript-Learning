//////////////////////////////////////////////////////////////////
///////////// Bubble Sort - (bubble up the largest to the top - Like Bar Chart)from beginning, compare each element
///////////// with it's next element and put it at the end
////////////  keep on doing this untill all elements will be sorted.

/////////////////////////////////
////////////////// METHOD 1
///// I DID MYSELF
/*
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
    }
  }
  return arr;
}

const arr = [2, 1, 4, 3, 5, 10, 2, 54, 13, 75, 19];

console.log(bubbleSort(arr));
*/
/////////////////////////////////
////////////////// METHOD 2
/////

function bubbleSort(arr) {
    function swap(arr, elem1, elem2) {
      let temp = elem1;
      elem1 = elem2;
      elem2 = temp;
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) swap(arr, arr[j], arr[j + 1]);
      }
    }
    return arr;
  }
  
  const arr = [2, 1, 4, 3, 5, 10, 2, 54, 13, 75, 19];
  
  console.log(bubbleSort(arr));
  
  //////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////// METHOD 3
  /////////////////////////////////////////// UDEMY
  ///////////////////// IF ARRAY IS ALMOST SORTED THEN BUBBLE SORT WILL MAKE UNNECESSARY LOOPING
  //////////////// SO WE WILL USE 'noSwap' flag to check whether swapping is exist or not
  /////// OPTIMIZED WITH NOSWAP
  /*
  function bubbleSort(arr) {
    let onSwap;
    for (let i = arr.length; i > 0; i--) {
      noSwap = true;
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          //// SWAP
           [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
          noSwap = false;
        }
      }
      if (noSwap) {
        break;
      }
    }
    return arr;
  }
  
  const arr = [2, 1, 4, 3, 5, 10, 54, 13, -5, 75, 19];
  
  console.log(bubbleSort(arr));
  */
  