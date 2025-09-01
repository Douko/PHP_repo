async function fetchAndProcessData() {
  try {
    const data = await fetchData();
    const processedData = await processData(data);
    return displayResults(processedData);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
