function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 123) {
        resolve({ id: 123, name: "John Doe", email: "john@example.com" });
      } else {
        reject(new Error("User not found"));
      }
    }, 1000);
  });
}

fetchUserData(123)
  .then((userData) => {
    console.log("User data: ", userData);
  })
  .catch((error) => {
    console.error("Error: ", error.message);
  })
  .finally(() => {
    console.log("Operation completed");
  });
