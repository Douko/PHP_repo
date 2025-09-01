// Anti-pattern: Unnecessary Promise wrapping
function fetchData() {
  return new Promise((resolve, reject) => {
    axios
      .get("/api/data")
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
}

// Better approach: Return the Promise directly
function fetchData() {
  return axios.get("/api/data").then((response) => response.data);
}
