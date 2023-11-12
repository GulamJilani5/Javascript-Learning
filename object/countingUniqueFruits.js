//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// SIMILAR TO COUNTING CHARACTER IN A STRING
/////////////////////
const fruits = [
  { apple: 4, orange: 3, pineapple: 7 },
  { banana: 5, mango: 1, orange: 9 },
  { mango: 5, apple: 2, papaya: 7 },
];
const fruitCount = {};
fruits.forEach((fruits) => {
  //console.log(fruits)
  for (let fruit in fruits) {
    //console.log(fruit);
    if (fruitCount[fruit])
      fruitCount[fruit] = fruitCount[fruit] + fruits[fruit];
    else fruitCount[fruit] = fruits[fruit];
    // fruitCount[fruit] ? fruitCount[fruit] = fruitCount[fruit] + fruits[fruit] : fruitCount[fruit] = fruits[fruit]
  }
});
console.log(fruitCount);
