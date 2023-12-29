// Aman has forgot password of his linkedin account but remembers ASCII values of his password in reverse order.
// Help him to find the correct password
// Password only has alphabet and space character
//  (code >= 97 && code <= 122)   // a-z
//  (code >= 65 && code <= 90)  // A-Z
//  (code >= 48 && code <= 57)){    // 0-9
// Space character 32
// const asciiCode = asciiValue.charCodeAt()
// const char = String.fromCharCode(asciiCode)

function forgetPassword(asciiValues) {
  const reverseAscii = asciiValues.split("").reverse().join("");
  const len = reverseAscii.length;
  console.log(reverseAscii); // 801141011127311011511697 === PrepInsta
  let i = 0;
  let password = "";
  while (i < len) {
    let asciiCode = reverseAscii[i] + reverseAscii[i + 1];
    // console.log(asciiCode, reverseAscii[i]);
    // if (asciiCode == 32) {
    if (asciiCode === "32") {
      console.log(asciiCode === "32"); // true if asciiCode is 32 because asciiCode is character string
      password += " ";
    } else if (
      (asciiCode >= 65 && asciiCode <= 90) ||
      (asciiCode >= 97 && asciiCode <= 122)
    ) {
      let char = String.fromCharCode(asciiCode);
      // console.log(asciiCode, char);
      password += char;
    } else if (i + 2 <= len) {
      asciiCode = asciiCode + reverseAscii[i + 2];
      char = String.fromCharCode(asciiCode);
      // console.log(asciiCode, char);
      password += char;
      i += 1;
    }
    i += 2;
  }
  return password;
}

// const AsciiValues = "796115110113721110141108"; // after reversing it will give - PrepInsta
const AsciiValues = "79611511011372321110141108"; // after reversing it will give - Prep Insta
const password = forgetPassword(AsciiValues);
console.log(password); // PrepInsta
