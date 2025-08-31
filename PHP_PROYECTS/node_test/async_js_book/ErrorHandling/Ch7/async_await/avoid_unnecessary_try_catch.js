async function processUserData() {
  try {
    const user = await fetchUser();
    const posts = await fetchPosts(user.id);
    const comments = await fetchComments(posts);
    return { user, posts, comments };
  } catch (error) {
    console.error("Error processing user data:", error);
  }
}
processUserData();
