const search = document.querySelector('form');
const cityValue = document.querySelector('.left-section-city');

// Func to fetch weather data by city name
const fetchWeatherByCity = async (city) => {
	const apiKey = '29c2b887fc301c4cbe23341fe49f9261';
	const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	const response = await fetch(apiUrl);
	const data = await response.json();
	cityValue.innerHTML = data.name;
	return data;
};

// Func to fetch weather data by latitude and longitude
const fetchWeatherByCoords = async (lat, lon) => {
	const apiKey = '29c2b887fc301c4cbe23341fe49f9261';
	const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
	const response = await fetch(apiUrl);
	const data = await response.json();
	return data;
};

search.addEventListener('submit', async (e) => {
	e.preventDefault();

	// Get city value from the form input
	const city = search.city.value.trim();
	search.reset();

	// Store the city in local storage
	localStorage.setItem('city', city);

	// Fetch weather data by city name
	const cityData = await fetchWeatherByCity(city);

	if (cityData.coord) {
		//Distructure lat,lon from coord to  Get lat and lon
		const { lat, lon } = cityData.coord;

		// Fetch weather data by lat and lon
		const weatherData = await fetchWeatherByCoords(lat, lon);

		// Update the UI with the weather data
		updateUi(weatherData);
	}
});

// Function to get the city from local storage
const getCityFromLocalStorage = () => {
	return localStorage.getItem('city');
};

// Check if a city is  in local storage and fetch weather data
const storedCity = getCityFromLocalStorage();
if (storedCity) {
	fetchWeatherByCity(storedCity)
		.then((cityData) => {
			if (cityData.coord) {
				const { lat, lon } = cityData.coord;
				return fetchWeatherByCoords(lat, lon);
			} else {
				throw new Error('City not found');
			}
		})
		.then((weatherData) => {
			updateUi(weatherData);
		})
		.catch((err) => console.log(err));
}
