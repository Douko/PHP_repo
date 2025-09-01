fetchData()
  .then(processData)
  .then(displayResults)
  .catch((error) => {
    console.error("An error occurred:", error);
  });
