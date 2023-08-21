//////////////////////////////////////////////////////////////////
///////////////////// SIMILAR TO COUNTING CHARACTER IN A STRING
////////////
const fruits = [
    { apple: 4, orange: 3, pneapple: 7 },
    { banana: 5, mango: 1, orange: 9 },
    { mango: 5, apple: 2, papaya: 7 }
  ];
  const fruitCount = {};
  fruits.forEach((element) => {
    // console.log(element)
    for(let fruit in element) {
      //console.log(fruit);
       if (fruitCount[fruit])
           fruitCount[fruit] = fruitCount[fruit] + element[fruit];
       else fruitCount[fruit] = element[fruit];
    }
  });
  
  console.log(fruitCount)
  