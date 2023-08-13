/////////////////////////////////////////////////
/////////////  INSERTION SORT IS GOOD IF DATA IS ALMOST SORTED OR WE ARE
/////////////  GETTING DATO ONLINE. ENTIRE ARRAY IS NOT AVAILAABLE IN BEGINNING BECAUSE  /////////////  DATA IS KEEP ON COMING ONLINE(LIVE)
/////////////// METHOD 1
/////// UDEMY WAY
/*
function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
     for(var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
       arr[j+1] = arr[j]    
    }
    //////////////// 'var' is function scoped not block scoped.
    //////////////
    arr[j + 1] = currentValue;
    // console.log(arr + '..............')
  }
  return arr;
}
const arr = [2, 4, 1, 3, 5];

console.log(insertionSort(arr));
*/
/////////////////////////////////////////////////
/////////////// METHOD 2
/////// UDEMY WAY
/*
function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j ;
     for(j= i - 1; j >= 0 && arr[j] > currentValue; j--) {
       arr[j+1] = arr[j]    
    }
 
    arr[j + 1] = currentValue;
    // console.log(arr + '..............')
  }
  return arr;
}
const arr = [2, 4, 1, 3, 5];

console.log(insertionSort(arr
*/

/////////////////////////////////////////////////
/////////////// METHOD 2
/////// UDEMY WAY

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > currentValue) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = currentValue;
      // console.log(arr + '..............')
    }
    return arr;
  }
  const arr = [2, 4, 1, 3, 5];
  
  console.log(insertionSort(arr));
  