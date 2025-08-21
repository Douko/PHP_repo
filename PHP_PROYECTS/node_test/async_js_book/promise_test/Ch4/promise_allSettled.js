const promises = [
  Promise.resolve(1),
  Promise.reject("Error occurred"),
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
];

Promise.allSettled(promises).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Promise ${index + 1} fulfilled with value:`, result.value);
    } else {
      console.log(`Promise ${index + 1} rejected with reason:`, result.reason);
    }
  });
});
