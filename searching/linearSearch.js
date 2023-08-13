//////////////////////////////////
//////////// ARRAY METHODS WHICH ARE DOING SEARCHING
//////// indexOf('value') return index if found otherwise -1
//////// includes('value') return true if found otherwise false
/////// find('value') return true if found otherwise false
/////// findIndex()

/////////////////////////////////
///////////// METHOD 1
////// I did myself(same as udemy lecture solution)
/*
function linearSearching(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return true;
  }
  return false;
}

const arr = [1, 2, 4, 10, 7, 12, 17];
const isFound = linearSearching(arr, 4);
//console.log(isFound)
if (isFound === true) console.log("found");
else console.log("not found");
*/


