//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////// MEHTOD 1
///////////// CREATING OBJECT AND INSERTING VALUE IN IT
function areDuplicates(arr) {
    const obj = {};
    // for (let i in arr) {
    //   //console.log(i) // gives index
    //   //obj[arr[i]] ? (obj[arr[i]] += 1) : (obj[arr[i]] = 1);
    //   obj[arr[i]] = ++obj[arr[i]] || 1
    // }
    for(const el of arr){
      obj[el] = ++obj[el] || 1
    }
    //console.log(obj)
    for (let key in obj) {
       // if (obj[key] > 1) return true; // will return true when value is duplicate 
      if (obj[key] > 1) console.log(key * 1); // will return duplicate values
      // if (obj[key] === 1) console.log(key * 1); // will return unique values  
    } 
    // return false;
  }
  const arr = [2, 10, 3, 5, 4, 5, 3, 2];
  areDuplicates(arr)
  // console.log(areDuplicates(arr));
  
  //=========================================================================
  //=========================================================================
  //////////////////////////////////////////////////
  // function dupicateValue(arr){
  //    const val = arr.filter((value, index) => arr.indexOf(value) !== index)
  //    console.log(val)
  // }
//   const arr = [1,3,2,7,6,4,3,2];
//   //const arr = [2, 1, 3, 5, 4, 5, 3, 2];
//   dupicateValue(arr)
  
  
  /////////////////////////////////////////////////////////////
  /////////////////////// METHOD 2
  /////////// USING SET([..arr])
  
  // function areDuplicates(arr) {
  //   const uniqueArr = new Set([...arr]);
  //   //console.log(uniqueArr)
  //   if (arr.length !== uniqueArr.size) return true;
  
  //   return false;
  // }
  // console.log(areDuplicates([1, 2, 3, 4, 5]));
  
  
  ////////////////////////////////////////////////////////////////
  //////////////////// METHOD 3
  // /////////// MULTIPLE POINTER
  
  // function areDuplicates(arr) {
  //   arr.sort((a, b) => a - b);
  //   //console.log(arr)
  
  //   let start = 0;
  //   let next = 1;
  //   while (next < arr.length) {
  //     if (arr[start] === arr[next]) return false;
  
  //     start++;
  //     next++;
  //   }
  //   return true;
  // }
  
  // console.log(areDuplicates([6,1, 3, 4, 2, 5]));
  // //console.log(areDuplicates([6,3,3,2, 1, 3, 4, 2, 5]));
  
  