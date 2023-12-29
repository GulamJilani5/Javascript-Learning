/////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// promise and settimeout are asynchronous code execution. Both get executed in event loop.
/////////////// Promise has higher priority than settimeout. Promise get executed in microtask queue.
//// executor function - (resolve, reject) => {}
//// Promise returns - resolve(successful) or reject(error)
//// states - pending, fulfilled, rejected

const setTimeoutvsPromise = new Promise((resolve, reject) => {
  console.log("Promise is starting...");
  resolve("Promise has executed");
  // reject('Some error has occured') // We can return it as an error message from the promise.
});

setTimeout(() => console.log("setTimeout with 0ms"), 0);
setTimeoutvsPromise
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
  });

console.log("Synchronous Code");
