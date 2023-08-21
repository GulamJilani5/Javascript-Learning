// - get the last names of sales employees
// - filter the accounting employees who are equal to or older than 30
const obj = {
  "accounting" : [   
                       { "firstName" : "John",  
                         "lastName"  : "Doe",
                         "age"   	: 23 },
  
                       { "firstName" : "Mary",  
                         "lastName"  : "Smith",
                          "age"  	: 32 },
  
                        { "firstName" : "prashant",  
                         "lastName"  : "gupta",
                          "age"  	: 38 }
  
                ],                       	 
    "sales" : [
                       { "firstName" : "Sally",
                         "lastName"  : "Green",
                          "age"  	: 27 },
  
                       { "firstName" : "Jim",   
                         "lastName"  : "Galley",
                         "age"   	: 41 }
                ]
  }

////////////////////////////////////
//////// METHOD 1
//   for(let field in obj){
//     // console.log(typeof field) // string
//     //console.log(obj[field])
//     if(field === 'sales'){
//         //console.log('...')
//         obj[field].map((value)=>{
//           //console.log(value)
//           const {lastName} = value;
//           console.log(lastName)
//         })
//     }
//     if(field === 'accounting'){
//         //console.log('...')
//         obj[field].map((value)=>{
//           //console.log(value)
//           const {age} = value;
//           if(age > 30)
//            console.log(age)
//         })
//     }
//   }

  ////////////////////////////////////
//////// METHOD 2

// for (const [key, value] of Object.entries(obj)){
//     // console.log(key, value)
//     if(key === 'sales'){
//        value.map((v)=>{
//         const {lastName} = v;
//         console.log(lastName)
//        })
//     }
//     if(key === 'accounting'){
//         value.map((v)=>{
//             const {age} = v;
//             if(age > 30){
//                 console.log(age)
//             }
//         })
//     }
// }

/////////////////////////////////////////
////////// METHOD 3

const {accounting, sales} = obj;
// console.log(accounting, sales)
// console.log(typeof accounting)  // (object)array

sales.map((value)=>{
    const {lastName} = value
    console.log(lastName)
})
accounting.map((value)=>{
    const {age} = value;
    if(age > 30){
        console.log(age)
    }
})

  