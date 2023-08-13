//////////////////////////////////////////////
///////////////// MEHTOD 1
/*
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
   /// SWAPPING MINIMUM VALUE WITH FOUND MIN
   // [arr[i], min] = [min, arr[i]]
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

const arr = [2,4,1,3,5]
console.log(selectionSort(arr));
*/
//////////////////////////////////////////////
////////////////////// MEHTOD 2
//////// UDEMY 
function selectionSort(arr) {
    const swap = (arr, ind1, ind2) => {
      [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
      //  let temp = arr[ind1];
      // arr[ind1] = arr[ind2];
      // arr[ind2] = temp;
    };
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) min = j;
      }
      ///// ONLY SWAP WHEN INDEX OF THE min HAS CHANGED.
      if (i !== min) swap(arr, i, min);
    }
  
    return arr;
  }
  
  const arr = [2, 4, 1, 3, 5];
  console.log(selectionSort(arr));
  