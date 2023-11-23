const apiKey = "643516541fc0a9c8a3fddf4b524cc7e1";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "&deg;C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0] == "Clouds") {
      weatherIcon.scroll("images.clouds.png");
    } else if (data.weather[0] == "Clear") {
      weatherIcon.scroll("images.clear.png");
    } else if (data.weather[0] == "Rain") {
      weatherIcon.scroll("images.rain.png");
    } else if (data.weather[0] == "Drizzle") {
      weatherIcon.scroll("images.drizzle.png");
    } else if (data.weather[0] == "Mist") {
      weatherIcon.scroll("images.mist.png");
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
