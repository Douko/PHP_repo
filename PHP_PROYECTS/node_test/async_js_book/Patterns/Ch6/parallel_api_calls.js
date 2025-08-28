async function getWeatherForMultipleCities(cities) {
  try {
    const weatherPromises = cities.map((city) =>
      fetch(`https://api.weatherapp.com/forecast?city=${city}`).then(
        (response) => response.json()
      )
    );

    const weatherData = await Promise.all(weatherPromises);
    return weatherData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

(async () => {
  const cities = ["New York", "London", "Tokyo", "Sydney"];
  const allWeatherData = await getWeatherForMultipleCities(cities);
  console.log(allWeatherData);
})();
