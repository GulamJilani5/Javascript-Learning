/************************** JavaScript******************************************************/
/////Round 1
//1. Print 1 after 1 second, 2 after second, 3 after second, 4 after second, 5 after second
/////Method 1
/*
function printVal() {
  let i = 1;

  function printV(n) {
    console.log(n);
  }

  while (i <= 5) {
    let currentI = i; // Create a separate copy of i for each iteration
    setTimeout(() => {
      printV(currentI); // Use the copy of i inside setTimeout
    }, 1000 * currentI);
    i++;
  }
}
printVal();
*/

//////Method 2
function printVal() {
  //   function printV(i) {
  //     console.log(i);
  //   }

  for (let i = 1; i <= 5; i++) {
    // setTimeout(() => printV(i), 1000 * i); // Pass the function as a callback using an arrow function
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}

printVal();
///// Round 2
// Callback hell(Pyramid of doom), Promises and async await.
// How can we call multiple asynchrounous functions synchronously.

/************************** ReactJS******************************************************/
////Round 1
// A lot of basic about reactjs, hooks and redux
////Round 2
//1. How can we manage state without using any hooks in reactjs.

/************************** CSS Round 1******************************************************/

/************************** NodeJS******************************************************/
//// Round 1
// They did not ask about nodejs

/////Round 2
//1. Difference between CommonJS require vs ES6 import
//2. Minimal file required to run nodejs application.
//3. How can we a create a template and use it multiple times in nodejs

/************************** SQL ******************************************************/
//// Round 1
//1. finding the second highest salary value of the given table in the sql query using postgresql.
////Round 2
//2. finding the duplicated records in a table. How many duplicates records are there in the table
