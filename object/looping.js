///////////////////////////////////////
//////////////// LOOPING A OBJECT
///////// Object.entries(obj)
const obj = {
   id: 5,
   name:'Jilani',
   isGraduated: true,
}
for (let [key, value] of Object.entries(obj)) {
    console.log(key, value);
}


///////////////////////////////////////
//////////////// LOOPING A STRING
///////// for...in loop
// const obj = {
//    id: 5,
//    name:'Jilani',
//    isGraduated: true,
// }
//  for (let key in obj) {
//   // console.log(key, obj[key]);
//    // console.log(key);
//    console.log(obj[key]);
   // if (obj.hasOwnProperty(key)) {
   //    console.log(key, obj[key]);
   // }
// }
