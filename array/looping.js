/// SUM OF THE ELEMENT OF ARRAY
/// LOOPING
// 1) BASIC FOR LOOP
// 2) FOR...OF(only for values)
// 3) FOR...IN(only for index)
// 40 forEach



///////////////////////////
////////// SIMPLE FOR LOOP
////// METHOD 1(A)

 /*const sum = (arr)=>{
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      sum += arr[i];
 }
 //return sum;
 }
 const arr = [2, 5, 7, 3, 9, 1];
 const add = sum(arr)
 console.log(add)
 */
 
 ////////////////////////
 ///// FOR ...IN  LOOP
 ///// MEHTOD 1(B)
 
 /*function sum(arr){
     let sum = 0;
     for( let i in arr)
         sum += arr[i]
   return sum;
 }
 
const arr = [2, 5, 7, 3, 9, 1]
const add = sum(arr)
console.log(add)
*/

///////////////////////////
/////// FOR... OF LOOP
//// MEHTOD 1(C)

/*function sum(arr){
   let sum = 0
   for(let el of arr)
      sum += el
 return sum     
}

const arr = [2, 5, 7, 3, 9, 1]
const add = sum(arr)
console.log(add)
 */
 
 ////////////////////////////
 ////// forEach() LOOP
 //// METHOD 1(D)
 /*function sum(arr){
     let sum = 0
    //  arr.forEach( (el, i) =>{
    //     //  sum += el
    //      sum += arr[i]
    //  })
     arr.forEach( function(el, i){
        //  sum += el
         sum += arr[i]
     })
     return sum
 }
 
 const arr = [2, 5, 7, 3, 9, 1]
 const add = sum(arr)
 console.log(add)
 */
 
 /////////////////////////////////
 ///////// reduce() 
 ////METHOD 2
 function sum(arr){
    const s = arr.reduce( (sum, cur) => sum + cur, 0)
   //  const s = arr.reduce( (sum, cur) => sum + cur)
    return s;
}

 const arr = [2, 5, 1, 9, 7, 3]
 const add = sum(arr)
 console.log(add)












