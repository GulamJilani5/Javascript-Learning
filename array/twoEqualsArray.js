//////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////
//////////////////////// METHOD 1

function twoArraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
  
    arr1.sort();
    arr2.sort();
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  
  const arr1 = [1,2,3];
  const arr2 = [2,3,1];
  
  console.log(twoArraysAreEqual(arr1, arr2));
  
  //////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////
  ////////////////////// METHOD 2
  /*
  function twoArraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    let obj = {};
    for (let i = 0; i < arr1.length; i++) {
      let value1 = arr1[i];
      // console.log(arr1[i])
      //if (obj[arr1[i]] > 0) obj[arr1[i]] += 1;
      obj[value1] = ++obj[value1] || 1;
      // obj[arr1[i]] = 1;
      // console.log(obj)
    }
    console.log(obj);
    for (let j = 0; j < arr2.length; j++) {
      let value2 = arr2[j];
      if (!obj[value2]) return false;
      else --obj[value2];
    }
    return true;
  }
  const arr1 = [1, 2, 3, 4, 5, 1,2,3];
  const arr2 = [1, 2, 3, 4, 5,1,2,3];
  
  console.log(twoArraysAreEqual(arr1, arr2));
  */
  