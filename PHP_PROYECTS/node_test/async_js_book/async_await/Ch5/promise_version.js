function fetchUserData(userId) {
  return fetch(`https://api.example.com/users/${userId}`)
    .then((response) => response.json())
    .then((userData) => {
      return fetch(`https://api.example.com/posts?userId=${userData.id}`);
    })
    .then((response) => response.json())
    .then((posts) => {
      return {
        user: userData,
        posts: posts,
      };
    })
    .catch((error) => {
      console.error("An error occurred:", error);
      throw error;
    });
}

fetchUserData(123)
  .then((result) => console.log(result))
  .catch((error) => console.error("Error:", error));
