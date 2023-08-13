// Program1a :suppose you have an integer array and a positive integer k.
//How will you count all distint pairs with a difference equal to k?
// arr = [13, 7, 5, 6, 11]
// Expected Output :
// 13 11
// 7 5

/// Method 1
/*
const arr = [13, 7, 5, 6, 11];
const k = 2

arr.forEach((el, i)=>{
  //console.log(el, i)
 i = i + 1;
 for(i; i<= arr.length -1; i++){
 //console.log(arr[i])
 const nextValue = arr[i]; 
 const diff = el - nextValue;
   if(k === diff){
      console.log(el, arr[i])
    } 
 }
})
*/

//Program 1b:suppose you have an integer array and a positive integer
//k.How will you count all distint pairs with a difference equal to
//k?
// arr = [13, 7, 5, 6, 11, 15, -3, 10]
// Expected Output :
// 13, 11
// 13, 15
// 7, 5
const arr = [13, 7, 5, 6, 11, 15, -3, 10];
const k = 2;
// Object to store final output in a pair in array.
result = {};
let pair = 1;
arr.forEach((el, i) => {
  //console.log(el, i)
  i = i + 1;
  for (i; i <= arr.length - 1; i++) {
    //console.log(arr[i])
    const nextValue = arr[i];
    let diff = el - nextValue;
    //console.log(diff);
    if (diff < 0) {
      //console.log(diff)
      diff = diff * -1;
    }
    if (k === diff) {
      //console.log(pair)
      res = [el, arr[i]];
      //console.log(res)
      let value = `pair${pair}`;
      //console.log(value)
      result[value] = res;
      pair = pair + 1;
    }
  }
});
for (key in result) {
  //if(result.hasOwnProperty(key)) {
  let p = result[key];
  //console.log(p.join(','))
  console.log(...p);
  //}
}
