// Given An Integer Array, Divide The Array Into & Subsets A And B While Respecting The Following
// Conditions : - The Intersection Of A And B Is null.
//              - The union of A and B is original array.
//              - The number of elements in subset A is minimal.
//              - The sum of A's elements is greater than the sum of B's elements.

"use strict";

// const fs = require("fs");

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//   inputString = inputString.split("\n");

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

/*
 * Complete the 'subsetA' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

let sumA = 0;
let sumRest = 0;
function subsetA(arr) {
  // Write your code here
  let ascendingArr = arr.sort();
  let arrA = ascendingArr.slice(4, ascendingArr.length);
  let restArr = ascendingArr.slice(0, 4);
  // console.log(arrA)
  for (let el of arrA) {
    sumA += sumA + el;
  }
  for (let e of restArr) {
    sumRest += sumRest + e;
  }
  if (sumA > sumRest) {
    const orginalArr = arrA.concat(restArr);
    //    console.log(orginalArr)
    for (let e1 of arrA) {
      for (let e2 of restArr)
        if (e1 == e2) {
          return null;
        }
    }
  }
  const res = arrA.sort();
  //    console.log(res)
  return res;
}

const arr = [5, 3, 2, 4, 1, 2];
const result = subsetA(arr);
console.log(result);
