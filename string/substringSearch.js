////////////////////////////////
////////////////// METHOD 1
////////// LOOPING
// function subStringSearch(long, short) {
//     let count = 0;
//     for (let i = 0; i < long.length; i++) {
//       console.log(short[j])
//       console.log(long[j])
//       for (let j = 0; j < short.length; j++) {
//         if(short[j] !== long[i +j]) break;
//         if( j === short.length - 1)
//            count++;
//        }
//     }
//     return count
//   }
//   const long = "lon loomg ojhomog";
//   const short = "omg";
//   const count = subStringSearch(long, short);
//   console.log(count);
  
  ////////////////////////////////
  ////////////////// METHOD 2
  ////////// include()
  
//   function subStringSearch(long, short) {
//     return long.includes(short);
//   }
//   const long = "lon loomg ojhomog";
//   const short = "omg";
//   const isFound = subStringSearch(long, short);
//   console.log(isFound);
  
  //////////////////////////////////
  //////////////////// METHOD 3
  ////////// indexOf()
  
  function subStringSearch(long, short) {
    return long.indexOf(short);
  }
  const long = "lon loomg ojhomog";
  const short = "omg";
  const isFound = subStringSearch(long, short);
  // console.log(isFound);
  if (isFound === -1) console.log("not found");
  else console.log("found");
  