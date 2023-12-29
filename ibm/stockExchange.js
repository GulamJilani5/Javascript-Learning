// arr, d
// i<j<k
// (arr[i] + arr[j] + arr[K]) / d == 0
// retun result

function getNumberOfEvent(arr, d) {
  let sum = 0;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = i + 2; k < arr.length; k++) {
        // console.log(arr[i], arr[j], arr[k]);
        sum = arr[i] + arr[j] + arr[k];
        if (sum / d == 0) {
          result++;
        }
      }
    }
    sum = 0;
  }
  return result;
}

const arr = [1, 2, 3, 4, 5];
const d = 3;
// 1+2+3/3 ==0, 2+3+4/3==0, 1+3+5/3==0, 3+4+5/3==0,
const result = getNumberOfEvent(arr, d);
console.log(result);
