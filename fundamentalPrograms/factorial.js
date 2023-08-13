///////////////////////////
////////// MEHTOD 1
////// ITERATIVE WAY

function factorial(num){
    total = 1;
    //for (let i = num; i > 0; i--){
      for (let i = num; i > 1; i--){
      total *= i;
    }
    return total;
  }
  
  console.log(factorial(5))
  
  ///////////////////////////
  ////////// MEHTOD 2
  ////// RECURSIVE WAY
  
  function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
  }
  
  console.log(factorial(5));
  
  ///////////////////////////
  ////////// MEHTOD 3
  ////// RECURSIVE WAY
  function factorial(x){
     if (x < 0 ) return 0;
     if (x <= 1 ) return 1;
     return x * factorial(x-1);
  }
  console.log(factorial(5));