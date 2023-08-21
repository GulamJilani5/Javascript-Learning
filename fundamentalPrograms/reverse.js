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
/////////////////////////////////////
    /* Read your input here 
    eg: For string variables:   let str = String(readLine()); 
        For int variables: let var_name = parseInt(readLine());
        For arrays : const arr = readLine().replace(/\s+$/g, '').split(' ');    
    */
        function reverse(str){
          let left = 0;
          let right = str.length - 1;
          let reverseStr = '';
          while (left <= right){
                  reverseStr += str.charAt(right);
                  right--;
         }
        return reverseStr;      
       }
          /*
          Call your function with the input/parameters read above
          eg: let x = example(var_name, arr);
          */ 
          const str = 'abcde';
          const rev = reverse(str)
         /*
         Log your output here 
         console.log(x);
         */
        console.log(rev);
      
      
  