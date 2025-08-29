async function fetchWithExponentialBackoff(url, options = {}, maxRetries = 5) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      const delay = Math.pow(2, i) * 1000;
      console.log(`Attempt ${i + 1} failed. Retrying in ${delay}ms...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

//Usage
(async () => {
  try {
    const data = await fetchWithExponentialBackOff(
      "https://api.example.com/data"
    );
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Failed to fetch data after multiple attempts:", error);
  }
})();
