///////////////////////////////////////////
////////////////////////// METHOD 1
///// HELPER MEHTOD RECURSION

/*
function collectStrings(obj){
  let stringArr = [];
     function gatherStrings(ob){
       for(let key in ob){
         if(typeof ob[key] === 'string'){
               stringArr.push(ob[key]);
           }
          else if(typeof ob[key] === 'object'){
              return gatherStrings(ob[key]) 
          }
        }
 }

 gatherStrings(obj); 
  //console.log( stringArr)
  
  return stringArr;
}


const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])
*/
/////////////////////////////////////////////////
//////////////////////////////METHOD 2
/////////////// PURE RECURSION

function collectStrings(obj) {
    let stringArr = [];
  
    for (let key in obj) {
      if (typeof obj[key] === "string") stringArr.push(obj[key]);
      else if (typeof obj[key] === "object")
        stringArr = stringArr.concat(collectStrings(obj[key]));
    }
    return stringArr;
  }
  
  const obj = {
    stuff: "foo",
    data: {
      val: {
        thing: {
          info: "bar",
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: "baz"
            }
          }
        }
      }
    }
  };
  
  console.log(collectStrings(obj)); //// ["foo", "bar", "baz"])
  