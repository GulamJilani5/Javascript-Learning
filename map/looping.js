// const map = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
//   ["key3", "value3"],
// ]);

// const arr = Array.from(map);
// console.log(
//   "Array from the map: ",
//   arr,
//   "\n",
//   "After flattening the array: ",
//   arr.flat()
// );

// for (let [key, value] of arr) {
//   console.log(`key: ${key} and value: ${value}`);
// }

/****************************************************************************************************************
 ******We can also use the optional mapping function argument with Array.from() to transform
 ******each element during the conversion process.
 *****************************************************************************************************************/

const map = new Map([
  ["key1", 1],
  ["key2", 2],
  ["key3", 3],
]);

// const arr = Array.from(map, ([key, value]) => [key, value * 2]);
// console.log("Array values multiplied by 2: ", arr);

////////.entries()
const arr = Array.from(map.entries(), ([key, value]) => [key, value * 2]);
console.log("Array values multiplied by 2: ", arr);

/////////.values()
// const arr = Array.from(map.values(), (value, index) => value + 1);
// console.log("Array values increamented by 1: ", arr);

//////////.keys()
// const arr = Array.from(map.keys());
// console.log("keys ", arr);
