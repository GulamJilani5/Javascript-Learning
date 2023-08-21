/////////////////////////////////////////////////
///// FIND ALPHA NUMERIC OCCURNECES OF A CHARACTER IN A GIVEN
///// STRING, ONLY FOR LOWER CASE LETTERS.

////////////////////////////////////////////
////////////////////// METHOD 1
////////USING REGULAR EXPRESSION

/*function charCount(str){
     let obj = {}
    for(let i = 0; i < str.length; i++){
         // let char = str[i].toLowerCase();
         // /[a-z0-9]/           
        let char = str[i]
        if(/[a-zA-Z0-9]/.test(char)){
            /// APPROACH 1
              // if(obj[char] > 0)
              //     obj[char]++;
              // else 
              //     obj[char] = 1;
            /// APPROACH 2
              //obj[char] = ++obj[char] || 1;
            /// APPROACH 3
              obj[char] ? obj[char] += 1 : obj[char] = 1;
         }
    }
    return obj;
}

const str = "He  llj   ilanio[]-==";
const result = charCount(str);
console.log(result)
*/
///////////////////////////////////////////
////////////////// METHOD 2
//// CHARACTER CODE

/*
function charCount(st){
    let obj = {};
    for (let char of st){
        //console.log(char)
       let code = char.charCodeAt()
       // both are same because single character is there
       //let code =  char.charCodeAt(0)
       //console.log(code)
        if( isAlphaNumeric(code))
              obj[char] = ++obj[char] || 1;
    }
    return obj;
}
function isAlphaNumeric(code){
    if( !(code >= 97 && code <= 122) &&  // a-z 
        !(code >= 65 && code <= 97) &&   // A-Z
        !(code >= 48 && code <= 57)){    // 0-9 
      return false;
    }
    return true;
}

const str = "hello@#$$ jilan -- ";
const result = charCount(str)
console.log(result)
*/

////////////////////////////////////////
////////////////////// METHOD 3
/////// USING CHARACTER CODE IN EASY WAY
function charCount() {
    const str = "Hellohhh --- 987 @#$$ {}{:";
    const obj = {};
    for (let char of str) {
      char = char.toLowerCase();
      const code = char.charCodeAt();
      // console.log(code)
      if (
        (code >= 65 && code <= 91) ||
        (code >= 97 && code <= 122) ||
        (code >= 48 && code <= 57)
      ) {
        obj[char] = ++obj[char] || 1;
      }
    }
    console.log(obj);
  }
  
  charCount();
  