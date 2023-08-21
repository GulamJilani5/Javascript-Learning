/////////////////////////////////
//////////////// METHOD 1
///// RECURSION
/*
function isPalindrome(str){
  ///////Base Case
  if(str.length === 1) return true; // single character is by default palindrome 
  if(str.length === 2) return str[0] === str[1]; // return true if both the characters are same
  ////// Recursion
  //// console.log(str.slice(-1)) get the last element
  //// str.slice(1,-1) get the second element to second last element
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
}

console.log(isPalindrome("abcba"))
// console.log(isPalindrome('tacocat'))
//console.log(isPalindrome("abcde"))
*/

//////////////////////////////////////////////
///////////////////////// METHOD 2
/////////// TWO COUNTER APPROACH

// function reverse(str) {
//     let left = 0;
//     let right = str.length - 1;
//     while (left <= right) {
//       if (str[left] !== str[right]) return false;
//       left++;
//       right--;
//     }
//     return true;
//   }
  
//   if (reverse("abcba")) console.log("palindrome");
//   else console.log("not palindrome");
  
  //////////////////////////////////////////////
//////////////////////// METHOD 3
///////// FOR LOOP

function isPalindram(str){
    let temp = str;
    let reverse = '';

  for(let i = str.length-1; i >= 0; i--){
      reverse += str.charAt(i);
  }
  console.log(temp, reverse)
  if(temp === reverse){
    console.log('palidrom')
  }
}

isPalindram('abcba')