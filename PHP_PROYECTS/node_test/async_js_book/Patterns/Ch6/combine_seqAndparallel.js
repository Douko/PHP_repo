async function processUserData(userId) {
  try {
    //Step 1
    const userData = await fetch(
      `https://api.example.com/users/${userId}`
    ).then((res) => res.json());
    //Step 2
    const [posts, friends] = await Promise.all([
      fetch(`https://api.example.com/posts?userId=${userId}`).then((res) =>
        res.json()
      ),
      fetch(`https://api.example.com/friends?userId=${userId}`).then((res) =>
        res.json()
      ),
    ]);
    //Step 3
    const processedData = await processCollectedData(userData, posts, friends);
    return processedData;
  } catch (error) {
    console.error("Error processing user data:", error);
    throw error;
  }
}

async function processCollectedData(userData, posts, friends) {
  //Simulate processing
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    user: userData,
    postCount: posts.length,
    friendCount: friends.length,
  };
}

//Usage
(async () => {
  try {
    const processedData = await processUserData(123);
    console.log("Processed user data:", processedData);
  } catch (error) {
    console.error("Failed to process user data:", error);
  }
})();
