/////////////////////////////////////////
////// FINDING ODD AND EVEN INTEGER FROM AN INTEGER ARRAY

///////////////////////////////////
////////// SIMPLE FOR LOOP
//// METHOD 1
/*function findOdd(arr){
    const odd = [];
    const even = []
  for(let i = 0; i < arr.length; i++){
     if(arr[i] % 2 === 0)
        even.push(arr[i]) 
     else
        odd.push(arr[i])
  }
 return {odd, even}
}

const arr = [2, 5, 3, 8, 7, 9, 10]
const obj = findOdd(arr)
console.log(`ODD ARRAY : ${[obj.odd]}`)
console.log("ODD ARRAY :" + obj.even)
//console.log(obj.even)

*/

//////////////////////////////
////////// filter() method
//// METHOD 2

const arr = [2, 0, 4, 7, 8, 9, 10, 11];

const even = arr.filter((el) => el % 2 === 0);
const odd = arr.filter((el) => el % 2 !== 0);

console.log(even);
console.log(odd);
