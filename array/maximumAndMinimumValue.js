//Find the maximum and minimum value in an array in javascript.
//Math.min(arr)
//Math.max(arr)
// arr.sort() - string array
// arr.sort((a,b)=> a-b) - number array

/////////////////////////////////
//////////////// MAXIMUM VALUE
////// MATHOD 1
/*function maxValue(arr){
    const len = arr.length;
    let maxV = arr[0];
 for(let i =1; i < len; i++){
    maxV = Math.max(maxV, arr[i])
    // console.log(maxV)
 }
return maxV;
}
const arr = [10,15,20,8,5];
const max = maxValue(arr);
console.log(max)
*/

/////////////////////////////////
//////////////// MAXIMUM VALUE
////// MATHOD 2
/*function maxValue(arr){
    const len = arr.length;
    let maxV = arr[0];
 for(let i =1; i < len; i++){
     if(arr[i] > maxV)
          maxV = arr[i];
 }
return maxV;
}
const arr = [10,-15,-2,8,5];
const max = maxValue(arr);
console.log(max)
*/
//////////////////////////////////////////////////

/////////////////////////////////
//////////////// MINIMUM VALUE
////// MATHOD 1
/*function minValue(arr){
    const len = arr.length;
    let min = arr[0];
 for(let i =1; i < len; i++){
    min = Math.min(min, arr[i])
    // console.log(min)
 }
return min;
}
const arr = [10,15,20,6,5];
const min = minValue(arr);
console.log(min)
*/

/////////////////////////////////
//////////////// MINIMUM VALUE
////// MATHOD 2
/*function minValue(arr){
    const len = arr.length;
    let min= arr[0];
 for(let i =1; i < len; i++){
     if(min > arr[i] )
          min = arr[i];
 }
return min;
}
const arr = [10,15,-2,8,5];
const min = minValue(arr);
console.log(min)
*/

/*const arr = [10,15,-2,8,5];
arr.sort()
console.log(arr)
*/

////////////////////////////////////////////////////////
////////////////////////////////////////////////// METHOD 3
//////////////////////SORT THEN FIND MAX & MIN AS FIRST AND LAST
/////////////////////ELEMENT OF AN ARRAY AS MIN & MAX
//////// ***** arr.sort((a, b) => a - b) - NUMBER ARRAY
///////***** arr.sort() - STRING ARRAY
/*const arr = [10,15,-2,8,-5];
arr.sort((a, b) => a - b)
const max = arr[arr.length -1];
const min = arr[0];
console.log(max, min)
*/

/*const arr = ['banana', 'apple', 'orange', 'papaya', 'mango'];
arr.sort()
console.log(arr)
*/

/////////////////////////////////////
////////////// MEHTOD 4
/////USING SPREAD OPERATOR AND MATH.min() & MATH.max()

/*const arr = [10, 5, 10, 4, -4, 7]
const max = Math.max(...arr)
const min = Math.min(...arr)
console.log(max, min)
*/

/////////////////////////////////////
////////////// MEHTOD 5
/////USING SPREAD OPERATOR AND MATH.min() & MATH.max()

const arr = [10, 5, 10, 4, -4, 7];
const max = Math.max.apply(null, arr);
const min = Math.min.apply(null, arr);
console.log(max, min);
