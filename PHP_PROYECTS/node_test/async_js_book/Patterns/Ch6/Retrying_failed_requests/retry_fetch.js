async function fetchWithRetry(url, options = {}, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      console.log(`Attempt ${i + 1} failed. Retrying...`);
    }
  }
}

//Usage
(async () => {
  try {
    const data = await fetchWithRetry("https://api.example.com/data");
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Failed to fetch data after multiple attempts:", error);
  }
})();
