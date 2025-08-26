async function fetchUserData(userId) {
  try {
    const userResponse = await fetch(`https://api.example.com/users/${userId}`);
    const userData = await userResponse.json();
    const postsResponse = await fetch(`https://api.example.com/posts?
        userId=${userData.id}`);
    const posts = await postsResponse.json();

    return {
      user: userData,
      posts: posts,
    };
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

async function main() {
  try {
    const result = await fetchUserData(123);
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
