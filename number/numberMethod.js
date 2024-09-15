//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
///////////////////////////// Number Methods
/////////////////////
////represent both integer and floating-point numbers
////double-precision 64-bit binary format
////Range: −1.7976931348623157×10^308 to 1.7976931348623157×10^308
////Precision: 53 bits (about 15-17 decimal places)
////Special Values: NAN, Infinity, -Infinity, 0 and -0

///////////////////////////////////// 16-bits
////////////////////// 2 ^ 16(65, 536);
///////////////////////////////////// 32-bits
////////////////////// 2 ^ 32(4, 294, 967, 296);
///////////////////////////////////// 64-bits
///////////////////// 2 ^ 64(18, 446, 744, 073, 709, 551, 616);

/**************************************************************************************************************/
/******************************** NAN (unique value not equal to anything, not even itself)
 ***********************************************************************************************************/
// Dividing zero by zero: 0 / 0 results in NaN.
// Using an invalid number format: parseInt('hello') results in NaN.
// Performing operations with non-numeric values that cannot be converted to numbers: Math.sqrt(-1) results in NaN.

/**************************************************************************************************************/
/********************************* Infinity (== and === give same result)
/**************************************************************************************************************/
// Dividing a positive number by zero: 1 / 0 results in Infinity.
console.log(1 / 0 === Infinity); // true
// Adding a positive number to Infinity: Infinity + 1 still results in Infinity.
console.log(Infinity + 1 === Infinity); // true
// Subtracting a negative number from Infinity: Infinity - (-1) still results in Infinity.
console.log(Infinity - -1 === Infinity); // true
/**************************************************************************************************************/
/********************************** -Infinity (== and === give same result)
/**************************************************************************************************************/
// Dividing a negative number by zero: -1 / 0 results in -Infinity.
console.log(-1 / 0 === -Infinity); // true
// Subtracting a positive number from -Infinity: -Infinity - 1 still results in -Infinity
console.log(-Infinity - 1 === -Infinity); // true

/* Static Methods  */
Number.isFinite(value);
Number.isInteger(value);
Number.isNaN(value);
Number.isSafeInteger(value);
Number.parseFloat(string);
Number.parseInt(string, radix);

// Instance Methods:
Number.prototype.toFixed(digits);
Number.prototype.toString(radix);
Number.prototype.valueOf();

/* Number Constants*/
Number.MAX_VALUE;
Number.MIN_VALUE;
Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER;
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
                                        NUMBERS
*************************************************************************************************/
// Static Methods:
Number.isFinite(value); // : //Checks if the value is a finite number.
<<<<<<< HEAD
//                           Return tru if value is other than Infinity, -Infinity or NAN
=======
//                           //Return true if value is other than Infinity, -Infinity or NAN
>>>>>>> ebb5d5566ba3ea19909cd0a5b4757eb87023075f
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
