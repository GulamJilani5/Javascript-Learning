function sumZero(arr){
    let left = 0;
    let right = arr.length -1;
    
    while(left < right){
      let sum = arr[left] + arr[right];
      
      if(sum === 0){
        return [arr[left], arr[right]]
      }
      
      if(sum > 0)
          right--
      if(sum < 0)
        left++
    }
  }
  console.log(sumZero([-3,-2,0, 2, 5,10]))