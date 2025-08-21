const fetchUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ name: "John Doe", age: 30 }), 1000)
  );
const fetchUserPosts = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1500)
  );
const fetchUserFriends = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(["Alice", "Bob", "Charlie"]), 2000)
  );

Promise.all([fetchUserData(), fetchUserPosts(), fetchUserFriends()])
  .then(([userData, userPosts, userFriends]) => {
    console.log("User Data:", userData);
    console.log("User Posts:", userPosts);
    console.log("User Friends:", userFriends);
  })
  .catch((error) => console.error("An error occurred:", error));
