const search = document.querySelector("form");
//search a city
search.addEventListener("submit", (e) => {
  //prevent default action
  e.preventDefault();

  //get city value
  const city = search.city.value.trim();
  search.reset();

  localStorage.setItem("city", city);
  console.log(localStorage);

  //fetch city from API

  const getCity = async (city) => {
    const key = "29c2b887fc301c4cbe23341fe49f9261";
    const base = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`;
    const response = await fetch(base);
    const data = await response.json();
    cityValue.innerHTML = data.city.name;
    // console.log(data.city.name);

    return data.city;
  };
  getCity(city).then((data) => {
    // console.log(data.coord.lat, data.coord.lon, data);
    return data;
  });

  //fetch weather using returned data from getCity()
  const getWeather = async (lat, lon) => {
    const key = "29c2b887fc301c4cbe23341fe49f9261";
    const base = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    const response = await fetch(base);
    const data = await response.json();
    // console.log(data);
    return data;
  };
  getCity(city)
    .then((data) => {
      return (lat = data.coord.lat), (lon = data.coord.lon);
      // return data.coord;
    })
    .then(() => {
      return getWeather(lat, lon);
    })
    .then((data) => {
      updateUi(data);
    })
    .catch((err) => console.log(err));
  if (localStorage.getItem("city")) {
    getCity(localStorage.getItem("city"))
      .then((data) => {
        return (lat = data.coord.lat), (lon = data.coord.lon);
      })
      .then(() => {
        return getWeather(lat, lon);
      })
      .then((data) => updateUi(data))
      .catch((err) => console.log(err));
  }
});
