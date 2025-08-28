async function getUserDataAndPosts(userId) {
  try {
    const userResponse = await fetch(`https://api.example.com/users/${userId}`);

    if (!userResponse.ok) throw new Error("Failed to fetch user data");
    const userData = await userResponse.json();
    const postsResponse = await fetch(
      `https://api.example.com/posts?userId=${userData.id}`
    );

    if (!postsResponse.ok) throw new Error("Failed. to fetch user posts");
    const postsData = await postsResponse.json();
    return { user: userData, posts: postsData };
  } catch (error) {
    console.error("Error fetching user data and posts:", error);
  }
}

(async () => {
  const userDataAndPosts = await getUserDataAndPosts(123);
  console.log(userDataAndPosts);
})();
