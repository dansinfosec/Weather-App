const apiKey = "396e46213aa0cd618afcb2133dfa4415";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".searchinput");
const searchBtn = document.querySelector(".searchbutton");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&APPID=${apiKey}`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature-box").innerHTML = `${data.main.temp}°C`;
        document.querySelector(".wind-speed").innerHTML = `${data.wind.speed} km/h`;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("City not found or API error.");
    }
}


// Add event listener for search button
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});