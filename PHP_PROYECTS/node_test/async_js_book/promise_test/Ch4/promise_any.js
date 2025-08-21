const server1 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("Server 1 failed")), 1000)
);
const server2 = new Promise((resolve) =>
  setTimeout(() => resolve("Data from Server 2"), 4000)
);
const server3 = new Promise((resolve) =>
  setTimeout(() => resolve("Data from Server 3"), 3000)
);

Promise.any([server1, server2, server3])
  .then((result) => console.log("First successful response:", result))
  .catch((error) => {
    if (error instanceof AgregateError) {
      console.error("All servers failed:", error.errors);
    }
  });
