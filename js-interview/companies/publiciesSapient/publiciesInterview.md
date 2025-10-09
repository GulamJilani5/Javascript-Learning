🔵🟢🔴➡️⭕🟠🟦🟣🟥🟧✔️⏺️ ☑️ • ‣ → ⁕

## ➡️ Round 1

- A lot of basic about reactjs, hooks and redux

### 🟦 Questions 1: Print 1 after 1 second, 2 after second, 3 after second, 4 after second, 5 after second

- **Method 1**

```js
  function printVal() {
  let i = 1;

  function printV(n) {
  console.log(n);
  }

  while (i <= 5) {
  let currentI = i; // Create a separate copy of i for each iteration
  setTimeout(() => {
  printV(currentI); // Use the copy of i inside setTimeout
  }, 1000 _ currentI);
  i++;
  }
  }
  printVal();
```

- **Method 2**

```js
function printVal() {
// function printV(i) {
// console.log(i);
// }

for (let i = 1; i <= 5; i++) {
// setTimeout(() => printV(i), 1000 _ i); // Pass the function as a callback using an arrow function
setTimeout(() => {
console.log(i);
}, 1000 _ i);
}
}

printVal();
```

## ➡️ Round 2

- Callback hell(Pyramid of doom), Promises and async await.
- How can we call multiple asynchrounous functions synchronously.
- How can we manage state without using any hooks in reactjs.
- Difference between CommonJS require vs ES6 import
- Minimal file required to run nodejs application.
- How can we a create a template and use it multiple times in nodejs
