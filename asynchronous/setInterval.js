///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// setInterval(function, intervalInMilliseconds)
////////// commonly used for creating recurring tasks, animations, and periodic updates.


let count = 1;

const intervalId = setInterval(() => {
  console.log(`Count: ${count}`);
  count++;
//   console.log(`IntervalId: ${intervalId}`);
  if (count > 5) {
    clearInterval(intervalId); // Stop the interval after 5 counts
  }
}, 1000);