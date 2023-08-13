//////////////////////////////////////////////////////////
///////////////////// FREQUENCY COUNTER PATTERN
//////// ELEMENT OF ONE ARRAY IS EXACTLY TWICE OF ANOTHER ARRAY

////////////////////////////////////
//////////// METHOD 1
//// indexOf()
//// splice()
/// COMPLEXITY O(n^2)
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      // ** exponential operator in js
      let correctIndex = arr2.indexOf(arr1[i] ** 2);
      // console.log(correctIndex)
      if (correctIndex === -1) return false;
      arr2.splice(correctIndex, 1);
    }
    return true;
  }
  
  const isSame = same([1, 2, 3], [9, 1, 4]);
  console.log(isSame);
  
  /////////////////////////////////////////////////////
  ////////////////METHOD 2
  /////// COMPLEXITY O(n^2)
  /////FREQUNCY COUNTER PATTERN
  //// VIDEO 28 - BIT DIFFICULT TO UNDERSTAND
  