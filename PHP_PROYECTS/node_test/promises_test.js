const myPromise = new Promise((resolve, reject) => {
  const success = false;
  if (success) {
    resolve(console.log("Operation successful"));
  } else {
    reject(console.log("hola"));
  }
});
