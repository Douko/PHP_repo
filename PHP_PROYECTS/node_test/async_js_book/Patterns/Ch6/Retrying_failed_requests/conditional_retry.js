async function fetchWithConditionalRetry(url, options = {}, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        return await response.json();
      }
      if (response.status >= 400 && response.status < 500) {
        throw new Error(`Client error! status: ${response.status}`);
      }
      throw new Error(`Server error! status: ${response.status}`);
    } catch (error) {
      if (i === maxRetries - 1 || error.message.includes("Client. error"))
        throw error;
      console.log(`Attempt ${i + 1} failed.  Retrying...`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}

//Usage
(async () => {
  try {
    const data = await fetchWithConditionalRetry("https:api.example.com/data");
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
})();
