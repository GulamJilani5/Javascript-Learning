///////////////////////////////////////////////////////////////////////
//////////////////////// This below program is counitng the all the character
/////////////////////// irrespective of their adjacent occurrence
////////////////////
////////////// eg. ttzff = 2tz2f, tttzffklzz = 3t3zkl2z

/*
function encryptionString(str) {
  let charCount = {};
  let encryption = "";
  for (let char of str) {
    charCount[char] = charCount[char] ? ++charCount[char] : 1;
  }
  // console.log(charCount);

  for (let [char, count] of Object.entries(charCount)) {
    // console.log(char, count);
    encryption += count > 1 ? `${count}${char}` : `${char}`;
  }
  return encryption;
}

const str = "ttzfffffjjjjj";
const result = encryptionString(str);

console.log(result);
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// Count only the adjacent string and append
/////////////////////////////////////////// that before the character and create the custom string.
//////////////////////////////// eg. ttzff = 2tz2f, tttzffklzz = 3tz2fkl2z
a;
///// Method 1
function encryptionString(str) {
  let charCount = {};
  let encryption = "";
  let count = 1;

  for (let i in str) {
    // for...in Loop Iterates Over Keys (Indexes as Strings):
    //    The for...in loop is intended for iterating over the keys of an object. When used with a string, i
    //    represents the index of each character as a string.
    // str[i + 1] Interpretation:
    //    Since i is a string, when you do i + 1, JavaScript interprets this as string concatenation, not arithmetic.
    //    For example, if i = "0", then i + 1 results in "01", not 1.
    //    Therefore, str["01"] is undefined because there is no such index in the string.
    // On the first iteration, i is "0" (a string).
    //      When you evaluate str[i + 1], it becomes str["01"], which is undefined.
    //      This happens in all iterations because i is always treated as a string, and i + 1 results
    //      in a string concatenation rather than numeric addition.
    // console.log(str[i], str[i + 1]); // str[i + 1] === undefined

    //     You can either convert i to a number before using it for indexing, or switch to a traditional for loop,
    //     which is generally more appropriate for this kind of task.
    //  Fix with parseInt (or unary + to convert i to a number)
    // i = parseInt(i); // Convert `i` to a number
    i = +i; // Convert `i` to a number
    if (i < str.length && str[i] === str[i + 1]) {
      count++;
      //   console.log(count);
    } else {
      //   console.log(count);
      charCount[str[i]] = count > 1 ? count : 1;
      count = 1;
    }
  }

  // console.log(charCount);
  for (let [char, count] of Object.entries(charCount)) {
    // console.log(char, count);
    encryption += count > 1 ? `${count}${char}` : `${char}`;
  }
  return encryption;
}
const str = "ttzff";
const result = encryptionString(str);
console.log(result);

///// Method 2
/*

function encodeString(input) {
  let encoded = "";
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const nextChar = input[i + 1];
    if (char === nextChar) {
      count++;
    } else {
      encoded += (count > 1 ? count : "") + char;
      count = 1;
    }
  }
  return encoded;
}

const input = "ttzff";
const encoded = encodeString(input);
console.log(encoded); // Output: "2tz2f"

*/

//////////Method 3
/*

function encodeString(str) {
  let encoded = "";
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    // If the next character is the same as the current one, increment the count
    // if (i < str.length - 1 && str[i] === str[i + 1]) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      // Append the count and the character to the encoded string
      if (count > 1) {
        encoded += count + str[i];
      } else {
        encoded += str[i];
      }
      // Reset the count
      count = 1;
      /////
    //  encoded += count > 1 ? count + str[i] : str[i];
    //  count = 1;
    }
  }
  return encoded;
}

const input = "ttttzffzzftklkl";
const encoded = encodeString(input);
console.log(encoded); // Output: "2tz2f"

*/

//////////Method 4
/*

function encodeString(str) {
  let count = 1;
  let encoded = "";
  let i = 0;
  while (i < str.length) {
    if (str[i] === str[i + 1]) {
      console.log(str[i]);
      count++;
    } else {
      console.log(count, str[i]);
      encoded += count > 1 ? count + str[i] : str[i];
      count = 1;
    }
    i++;
  }
  //    console.log(encoded);
  return encoded;
}

const input = "ttttzffzzftklkl";
const encoded = encodeString(input);
console.log(encoded);

*/
