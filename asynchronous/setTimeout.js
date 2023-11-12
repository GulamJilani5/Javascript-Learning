/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// setTimeout(function, delayInMilliseconds);
//////// USAGE
// 1) UI Animations: Creating animations by repeatedly updating the UI state with small delays.
// 2) Debouncing and Throttling: Delaying the execution of a function to avoid rapid or excessive calls (e.g., 
//    for handling scroll or resize events).
// 3) Fetching Data: Introducing a delay before making an API request to prevent excessive requests.
// 4) UI Feedback: Providing temporary messages or alerts to users.

console.log('starting...')
setTimeout(()=>console.log('Executed after 1000ms or 1sec'),1000)
console.log('end')