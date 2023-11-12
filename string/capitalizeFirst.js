/////////////////////////////////////////////////////////////
////////////////////////////////////////// METHOD 1
//////// I MADE THIS LOGIC BY MYSELF

/*
function capitalizedFirst(arr){
  // Base Case
  if(arr.length === 0) return arr;
  //console.log(arr[0].charAt(0).toUpperCase())
  return [arr[0].charAt(0).toUpperCase() + arr[0].slice(1), ...capitalizedFirst(arr.slice(1))]
}
//console.log(capitalizedFirst(['apple', 'banana', 'orange']))
console.log(capitalizedFirst(['apple']))
*/

/////////////////////////////////////////////////////////////
/////////////////////////////////////// METHOD 2
/////////I MADE THIS LOGIC BY MYSELF

const finalArr = [];
function capitalizedWords(arr){
    if(arr.length === 0) return arr;
    for(const el of arr){
      // console.log(el[0].toUpperCase())
     //  let firstChar = el.charAt(0).toUpperCase();
      let firstChar = el[0].toUpperCase()
      finalArr.push(el.replace(el[0], firstChar));
    }
    return finalArr;
  }
  
  let words = ['i', 'am', 'learning', 'recursion'];
  console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']






















