function getSumNumber(arr) {
  let ScoreA = 0;
  let ScoreB = 0;
  const len = arr.length;
  let i = 0;
  while (i < len) {
    ///// PlayerA
    let a;
    if (arr.length > 0) {
      a = arr[0];
      //   console.log(a);
      i++;
      ScoreA += a;
      // arr = arr.slice(1);
      arr.shift();
      //   console.log(arr);
      if (a % 2 === 0) {
        arr.reverse();
      }
    }
    ///// PlayerB
    let b;
    if (arr.length > 0) {
      b = arr[0];
      //   console.log(b);
      i++;
      ScoreB += b;
      // arr = arr.slice(1);
      arr.shift();
      //   console.log(arr);
      if (b % 2 === 0) {
        arr.reverse();
      }
    }
  }
  //   console.log(ScoreA, ScoreB);
  if (ScoreA > ScoreB) return ScoreA - ScoreB;
  else return ScoreB - ScoreA;
}
const arr = [1, 3, 2, 5, 6];
// a = 1 + 2 + 5 = 8
// b = 3 + 6 = 9
const result = getSumNumber(arr);
console.log(result);
