//////////////////////////////
////////// MEHTOD 1
/*
function countUniqueValues(arr){
  let left = 0;
  let next = left + 1;
  while(next < arr.length){
     if(arr[left] === arr[next]){
           next++;      
      }
      if(arr[left] !== arr[next]){
         // arr[left] = arr[next];
         left++
         arr.splice(left, 1, arr[next])
         next++    
      }    
  }
  return left+1
}

console.log(countUniqueValues([1,1,2,2,3,3,4,5,7,8,9, 10, 11, 134, 176]))
*/
//////////////////////////////
////////// MEHTOD 2

function countUniqueValues(arr) {
  
    if( arr.length === 0) return 0;
    
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  }
  
  console.log(countUniqueValues([1, 2, 3, 3, 4, 4, 5, 5, 6, 7]));
  