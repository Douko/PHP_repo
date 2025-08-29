async function fetchWithBackoffAndJitter(url, options = {}, maxRetries = 5) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: $response.status`);
      }
      return await response.json();
    } catch (error) {
      if (i === maxRetries - 1) throw error;

      const baseDelay = Math.pow(2, i) * 1000;
      const jitter = Math.random() * 1000;
      const delay = baseDelay + jitter;
      console.log(`Attempt. ${i + 1} failed.  Retrying in ${delay}ms...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

// Usage
(async () => {
  try {
    const data = await fetchWithBackoffAndJitter(
      "https://api.example.com/data"
    );
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Failed to fetch after multiple attempts:", error);
  }
})();
