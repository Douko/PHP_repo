async function fetchAllData() {
  try {
    const [user, posts, comments] = await Promise.all([
      fetchUser(),
      fetchPosts(),
      fetchComments(),
    ]);
    // Process the results
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle the error
  }
}
