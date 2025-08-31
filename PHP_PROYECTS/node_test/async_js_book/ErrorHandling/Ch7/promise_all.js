Promise.all([fetchUser(), fetchPosts(), fetchComments()])
  .then(([UserActivation, postMessage, comments]) => {
    // Process the results
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
