const fetchData = new Promise((resolve) => {
  setTimeout(() => resolve("Data. fetched successfully"), 3000);
});

const timeout = new Promise((_, reject) => {
  setTimeout(() => reject(new Error("Request timed out")), 2000);
});

Promise.race([fetchData, timeout])
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));
