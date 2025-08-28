function getWeatherData(city) {
  return fetch(`https://api.weatherapp.com/forecast?city=${city}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Weather data:", data);
      return data;
    })
    .catch((error) => {
      console.error("There was a problem fetching the weather data:", error);
    });
}

getWeatherData("New York");
