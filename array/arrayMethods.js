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
sort(); // Sort based on Unicode character, So good for string elements directly not for number elements of the array.
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
