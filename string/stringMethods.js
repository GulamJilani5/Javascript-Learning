//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
///////////////////////////// String Methods

charAt(index);
charCodeAt(index);
slice(beginIndex, endIndex);
substring(indexStart, indexEnd);
split(separator, limit);
// concat(str1, str2, ...);
includes(searchString, position);
endsWith(searchString, length);
indexOf(searchValue, fromIndex);
lastIndexOf(searchValue, fromIndex);
startsWith(searchString, position);
repeat(count);
replace(searchValue, newValue);
localeCompare(compareString, locales, options);
toLowerCase();
toUpperCase();
toString();
valueOf();
padStart(targetLength, padString);
padEnd(targetLength, padString);
trim();
trimStart() / trimLeft();
trimEnd() / trimRight();
match(regexp);
search(regexp);

/**************************************************************************************************************                               
                                               STRINGS
***************************************************************************************************************/
/////////////////// String Methods
////////////

//Inspecting Indivisual(16-Bit) Character Of A String.
charAt(index) === str[index]; // Returns the character at the specified index.
charCodeAt(index); //:        //Returns the Unicode of the character at the specified index.
codePointAt(index); //

//Obtaining portions of a string
slice(startIndex, endIndex); // : Extracts a part of a string.
substring(startIndex, endIndex); // : Extracts characters from a string between two specified indices.
split(separator, limit); // : Splits a string into an array of substrings.

//Searching A String
indexOf(searchValue, fromIndex); // :      Returns the position(index) of the first occurrence of a specified value.
lastIndexOf(searchValue, fromIndex); // :  Returns the position(index) of the last occurrence of a specified value.

//Boolean Searching Functions In ES6 And Later.
startsWith(searchString, position); // : Checks if a string starts with another string.(position ==== index)
endsWith(searchString, length); // :     Checks if a string ends with another string.
includes(searchString, position); // :   Checks if a string contains another string. (position ==== index)

//Creating Modified Version Of A String.
replace(searchValue, newValue); // : Replaces specified values in a string.
toLowerCase(); // : Converts a string to lowercase.
toUpperCase(); // : Converts a string to uppercase.
normalize();

//String Padding Functions In ES2017
padStart(targetLength, padString); // : Pads the start of a string.
padEnd(targetLength, padString); // :   Pads the end of a string.

//Space Trimming Functions. trim Is ES5, Others Are ES2019
trim(); // :                   Removes whitespace from both sides of a string.
trimStart() / trimLeft(); // : Removes whitespace from the start of a string.
trimEnd() / trimRight(); // :  Removes whitespace from the end of a string.

repeat(count); // : Returns a new string with a specified number of copies of the string.
toString(); // : Returns the string representation of an object.
valueOf(); // :  Returns the primitive value of a String object.
localeCompare(compareString, locales, options); // : Compares two strings in the current locale.
match(regexp); // : Matches a string against a regular expression.
search(regexp); // : Searches a string for a match against a regular expression.
