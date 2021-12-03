//create 6 divs elements
const createElement = () => {
  const section = document.querySelector(".right-section");

  const newDiv = (id) => Object.assign(document.createElement("div"), { id });
  const items = [
    { key: "day_one" },
    { key: "day_two" },
    { key: "day_three" },
    { key: "day_four" },
    { key: "day_five" },
    { key: "day_six" },
  ];

  for (const div of items) section.appendChild(newDiv(div.key));

  //add a elements to a divs
  section.childNodes.forEach((item) => {
    const pElement = document.createElement("p");
    const img = document.createElement("div");
    const pElementTwo = document.createElement("p");
    const span = document.createElement("span");

    item.classList.add("week-day");
    pElementTwo.classList.add("weekTemp");
    pElement.classList.add("day");
    item.appendChild(pElement);
    item.appendChild(img);
    item.appendChild(pElementTwo);

    img.innerHTML = '<img src="img.png/01d.png" alt="sun" />';
    pElement.innerHTML = "Tus";
    pElementTwo.innerHTML = "14 &#176; C";
    span.innerHTML = "C";
  });
  // console.log(day_one);
};
createElement();

//Update UI with data
const timeZone = document.querySelector(".time-zone");
const temperatur = document.querySelector(".temperatur");
const feelsLikeTemp = document.querySelector(".temperature-feels-like-info");
const cityValue = document.querySelector(".left-section-city");
const mainImg = document.querySelector(".left-section-icon");
const weatherInfo = document.querySelector(".weather-description");
const windInfo = document.querySelector(".day-wether-wind-info");
const pressure = document.querySelector(".day-weather-pressure-info");
const humidity = document.querySelector(".day-weather-humidity-info");
const section = document.querySelector(".right-section");
// const dayOnetemp = document.querySelector("#day_one > p.weekTemp");
// const dayOneDay = document.querySelector("#day_one > p.day");
// const dayOneImg = document.querySelector("#day_one > div");
const divOne = document.querySelector("#day_one");
const divTwo = document.querySelector("#day_two");
const divThree = document.querySelector("#day_three");
const divFour = document.querySelector("#day_four");
const divFive = document.querySelector("#day_five");
const divSix = document.querySelector("#day_six");
console.log();

const updateUi = async (data) => {
  const setDay = () => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    //current weather
    let icon = data.current.weather[0].icon;
    timeZone.innerHTML = data.timezone;
    temperatur.innerHTML = `${data.current.temp}&#176; C`;
    feelsLikeTemp.innerHTML = `(${data.current.feels_like})&#176; C`;
    mainImg.innerHTML = `<img src="img-svg/${icon}.svg">`;
    weatherInfo.innerHTML = data.current.weather[0].description.toUpperCase();
    windInfo.innerHTML = `${data.current.wind_speed} km/h`;
    pressure.innerHTML = `${data.current.pressure} hPa`;
    humidity.innerHTML = `${data.current.humidity} %`;
    // console.log(humidity, pressure);
    // week weather output to a DOM
    // day one
    // prettier-ignore
    divOne.innerHTML =
    `<p class="day">${weekday[new Date(data.daily[1].dt * 1000).getDay()]}</p>
    <div><img src="img.png/${data.daily[1].weather[0].icon}.png" alt="${data.daily[1].weather[0].main}"></div>
    <p class="weekTemp">High ${data.daily[1].temp.max.toFixed(1)}&#176;Low ${data.daily[1].temp.min.toFixed(1)}&#176 C</p>`;
    //day two
    // prettier-ignore
    divTwo.innerHTML =
    `<p class="day">${weekday[new Date(data.daily[2].dt * 1000).getDay()]}</p>
    <div><img src="img.png/${data.daily[2].weather[0].icon}.png" alt="${data.daily[2].weather[0].main}"></div>
    <p class="weekTemp">High ${data.daily[2].temp.max.toFixed( 1)}&#176;Low ${data.daily[2].temp.min.toFixed(1)}&#176 C</p>`;
    //day three
    // prettier-ignore
    divThree.innerHTML =
    `<p class="day">${weekday[new Date(data.daily[3].dt * 1000).getDay()]}</p>
    <div><img src="img.png/${data.daily[3].weather[0].icon}.png" alt="${data.daily[3].weather[0].main}"></div>
    <p class="weekTemp">High ${data.daily[3].temp.max.toFixed( 1)}&#176;Low ${data.daily[3].temp.min.toFixed(1)}&#176 C</p>`;
    //day four
    // prettier-ignore
    divFour.innerHTML =
    `<p class="day">${weekday[new Date(data.daily[4].dt * 1000).getDay()]}</p>
    <div><img src="img.png/${data.daily[4].weather[0].icon}.png" alt="${data.daily[4].weather[0].main}"></div>
    <p class="weekTemp">High ${data.daily[4].temp.max.toFixed( 1)}&#176;Low ${data.daily[4].temp.min.toFixed(1)}&#176 C</p>`;
    //day five
    // prettier-ignore
    divFive.innerHTML =
    `<p class="day">${weekday[new Date(data.daily[5].dt * 1000).getDay()]}</p>
    <div><img src="img.png/${data.daily[5].weather[0].icon}.png" alt="${data.daily[5].weather[0].main}"></div>
    <p class="weekTemp">High ${data.daily[5].temp.max.toFixed( 1)}&#176;Low ${data.daily[5].temp.min.toFixed(1)}&#176 C</p>`;
    //day six
    // prettier-ignore
    divSix.innerHTML =
    `<p class="day">${weekday[new Date(data.daily[6].dt * 1000).getDay()]}</p>
    <div><img src="img.png/${data.daily[6].weather[0].icon}.png" alt="${data.daily[6].weather[0].main}"></div>
    <p class="weekTemp">High ${data.daily[6].temp.max.toFixed( 1)}&#176;Low ${data.daily[6].temp.min.toFixed(1)}&#176 C</p>`;
  };
  setDay();
};
const getAtime = () => {
  const dt = document.querySelector(".left-section-date");
  const date = new Date();
  const time = date.toDateString();
  dt.innerHTML = time;
};
getAtime();

//   const dt = data.daily[0].dt;
//   const milliseconds = dt * 1000;
//   const dateObject = new Date(milliseconds);
//   const humanDateFormat = dateObject.getDay();
//   const day = weekday[humanDateFormat];

//   // console.log(humanDateFormat, day);
//   // dayOneDay.innerHTML = weekday[new Date(data.daily[0].dt * 1000).getDay()];
// };
