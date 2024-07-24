/******************************************************************************************************
                                     Mutating Methods:
***************************************************************************************************** */
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

/*******************************************************************************************************************
                                     Non-Mutating Methods:
******************************************************************************************************************** */
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
