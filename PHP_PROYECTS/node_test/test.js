console.log("Script start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
  })
  .then(() => {
    console.log("Promise 2");
  });

queueMicrotask(() => {
  console.log("Microtask 1");
});
//Maybe microtask is being executed before promise 2 because promise is in otro lvl of stack.
//But promises is still executed before setTimeout.
console.log("Script end");
