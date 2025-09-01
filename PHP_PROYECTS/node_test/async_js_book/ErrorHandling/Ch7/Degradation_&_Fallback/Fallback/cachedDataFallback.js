async function fetchData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    localStorage.setItem("cacheData", JSON.stringify(data));
    return data;
  } catch (error) {
    console.warn("Failed to fetch fresh data, using cached data");
    const cachedData = localStorage.getItem("cachedData");
    if (cachedData) {
      return JSON.parse(cachedData);
    }
    throw new Error("No data available");
  }
}
