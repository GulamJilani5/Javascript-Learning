/////////////////////////////////////////////////////////
/////////////////////////////// REVERSING AN STRING
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
////////////////////// METHOD 2
////// TWO COUNTER APPROACH

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

//////////////////////////////////////////////////////////////////
///////////////////////////////////// Method 3
function reverse(str) {
  let left = 0;
  let right = str.length - 1;
  let reverseStr = "";
  while (left <= right) {
    // reverseStr += str.charAt(right);
    reverseStr += str[right];
    right--;
  }
  return reverseStr;
}

const str = "abcdefgh";
const rev = reverse(str);
console.log(rev);

////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// METHODs TO REVERSE THE STRING
// This code splits the string into an array of characters, reverses the order of the
// characters using the array's reverse() method, and then joins them(arrays) back together into a
// single string using the join() method.

// function reverseString(str) {
//   let revStr = str.split("").reverse().join("");
//   console.log(revStr);
// }

// const str = "abcde";
// reverseString(str);
