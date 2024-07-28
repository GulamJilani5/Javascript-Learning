// Number Methods

/* Static Methods  */
Number.isFinite(value);
Number.isInteger(value);
Number.isNaN(value);
Number.isSafeInteger(value);
Number.parseFloat(string);
Number.parseInt(string, radix);
Number.prototype.toFixed(digits);
Number.prototype.toString(radix);
Number.prototype.valueOf();

/* Number Constants*/
Number.MAX_VALUE;
Number.MIN_VALUE;
Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGE;
Number.NaN;
Number.POSITIVE_INFINITY;
Number.NEGATIVE_INFINITY;

/****************** Mathematical Constants *****************/
Math.ceil(x);
Math.floor(x);
Math.max(...values);
Math.min(...values);
Math.random();
Math.round(x);
Math.trunc(x);
Math.pow(base, exponent);
Math.sqrt(x);

/*************************************************************************************************
                                           STRING
*************************************************************************************************/

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

/*************************************************************************************************
                                         
                                               ARRAY

*************************************************************************************************/

/********** ARRAY - Mutating Methods: ******/
push();
pop();
shift(); // remove beginning
unshift(); // add beginning
splice(start, deleteCount, ...items);
reverse();
copyWithin(target, start, end);
fill(value, start, end);
flatMap(callback);
sort(); // Sort based on Unicode character, So good for string elements not for number elements of the array.
// Number elements
const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);
// String elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

/********** ARRAY -  Non-Mutating Methods: ******/
forEach(callback);
map(callback);
reduce(callback, initialValue);
reduceRight(callback, initialValue);
filter(callback);
slice(start, end);
find(callback);
findIndex(callback);
concat(...arrays);
every(callback);
some(callback);
indexOf();
join(separator);
toString();
valueOf();
entries();
keys();
values();
includes(value, fromIndex);
flat(depth);
toLocaleString();

/*************************************************************************************************       
                                        NUMBERS
*************************************************************************************************/

// Static Methods:
Number.isFinite(value); // : //Checks if the value is a finite number.
Number.isInteger(value); // :Checks if the value is an integer.
Number.isNaN(value); // : Checks if the value is NaN.
Number.isSafeInteger(value); // : Checks if the value is a safe integer.
Number.parseFloat(string); // : Parses a string and returns a floating point number.
Number.parseInt(string, radix); // : Parses a string and returns an integer of the specified radix.

// Instance Methods:
Number.prototype.toFixed(digits); // : Formats a number using fixed-point notation.
Number.prototype.toString(radix); // : Converts a number to a string in the specified radix.
Number.prototype.valueOf(); // : Returns the primitive value of a Number object.

// Number Constants:
Number.MAX_VALUE; // : The maximum numeric value representable in JavaScript.
Number.MIN_VALUE; // : The smallest positive numeric value representable in JavaScript.
Number.MAX_SAFE_INTEGER; // : The maximum safe integer in JavaScript (2^53 - 1).
Number.MIN_SAFE_INTEGE; // : The minimum safe integer in JavaScript (-(2^53 - 1)).
Number.NaN; // : Special "Not-a-Number" value.
Number.POSITIVE_INFINITY; // : Positive Infinity (a special value representing infinity).
Number.NEGATIVE_INFINITY; // : Negative Infinity (a special value representing negative infinity).

// Mathematical Methods (Math Object)
Math.ceil(x); // : Rounds a number upwards to the nearest integer.
Math.floor(x); // : Rounds a number downwards to the nearest integer.
Math.max(...values); // : Returns the largest of zero or more numbers.
Math.min(...values); // : Returns the smallest of zero or more numbers.
Math.random(); // : Returns a pseudo-random number between 0 and 1.
Math.round(x); // : 0.5 or greater then rounded to next hgiher integer,ex- 1.5, 1.6 === 2.
Math.trunc(x); // : Returns the integer part of a number, removing any fractional digits.
Math.pow(base, exponent); // : Returns the base to the exponent power.
Math.sqrt(x); //:  Returns the square root of a number.

/*************************************************************************************************                               
                                               STRINGS
*************************************************************************************************/

// String Methods
charAt(index); // : Returns the character at the specified index.
charCodeAt(index); // : Returns the Unicode of the character at the specified index.
slice(beginIndex, endIndex); // : Extracts a part of a string.
substring(indexStart, indexEnd); // : Extracts characters from a string between two specified indices.
split(separator, limit); // : Splits a string into an array of substrings.
includes(searchString, position); // : Checks if a string contains another string.
endsWith(searchString, length); // : Checks if a string ends with another string.
indexOf(searchValue, fromIndex); // : Returns the position of the first occurrence of a specified value.
lastIndexOf(searchValue, fromIndex); // : Returns the position of the last occurrence of a specified value.
startsWith(searchString, position); // : Checks if a string starts with another string.
repeat(count); // : Returns a new string with a specified number of copies of the string.
replace(searchValue, newValue); // : Replaces specified values in a string.
localeCompare(compareString, locales, options); // : Compares two strings in the current locale.
toLowerCase(); // : Converts a string to lowercase.
toUpperCase(); // : Converts a string to uppercase.
toString(); // : Returns the string representation of an object.
valueOf(); // : Returns the primitive value of a String object.
padStart(targetLength, padString); // : Pads the start of a string.
padEnd(targetLength, padString); // : Pads the end of a string.
trim(); // : Removes whitespace from both sides of a string.
trimStart() / trimLeft(); // : Removes whitespace from the start of a string.
trimEnd() / trimRight(); // : Removes whitespace from the end of a string.
match(regexp); // : Matches a string against a regular expression.
search(regexp); // : Searches a string for a match against a regular expression.

/*************************************************************************************************   
                                               ARRAY
*************************************************************************************************/

/********** ARRAY - Mutating Methods: ******/
push(); // Adds one or more elements to the end of an array.
pop(); // : Removes the last element from an array.
shift(); // : Removes the first element from an array.
unshift(); // : Adds one or more elements to the beginning of an array.
splice(start, deleteCount, ...items); // : Adds/removes items to/from an array.
reverse(); // : Reverses the order of the elements in an array.
copyWithin(target, start, end); // : Copies part of an array to another location within the same array.
fill(value, start, end); // : Fills all the elements in an array from a start index to an end index with a static value.
flatMap(callback); // : Maps each element using a mapping function, then flattens the result.
sort(); // : Sorts the elements of an array in place.

/********** ARRAY -  Non-Mutating Methods: ******/
forEach(callback); // : Executes a provided function once for each array element.
map(callback); // : Creates a new array with the results of calling a provided function on every element.
reduce(callback, initialValue); // : Applies a function against an accumulator and each element to reduce it to a single value.
reduceRight(callback, initialValue); // : Applies a function against an accumulator and each element (from right-to-left) to reduce it to a single value.
filter(callback); // : Creates a new array with all elements that pass the test implemented by the provided function.
slice(start, end); // : Returns a shallow copy of a portion of an array.
find(callback); // : Returns the value of the first element that satisfies the provided testing function.
findIndex(callback); // : Returns the index of the first element that satisfies the provided testing function.
concat(...arrays); // : Merges two or more arrays.
every(callback); // : Tests whether all elements in the array pass the test implemented by the provided function.
some(callback); // : Tests whether at least one element in the array passes the test implemented by the provided function.
indexOf(); // : Returns the first index at which a given element can be found.
join(separator); // : Joins all elements into a string.
toString(); // : Returns a string representing the array.
valueOf(); // : Returns the primitive value of the array.
entries(); // : Returns a new Array Iterator object that contains the key/value pairs.
keys(); // : Returns a new Array Iterator object that contains the keys.
values(); // : Returns a new Array Iterator object that contains the values.
includes(value, fromIndex); // : Determines whether an array includes a certain element.
flat(depth); // : Creates a new array with all sub-array elements concatenated into it.
toLocaleString(); // : Returns a string representing the elements using their locale-specific string representations.
