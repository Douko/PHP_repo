async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred while fetching the data:", error);
    throw error;
  }
}

async function processData() {
  try {
    const data = await fetchData("https://api.example.com/data");
    console.log("Data processed successfully:", data);
  } catch (error) {
    console.error("Error processing data:", error);
  }
}

processData();
