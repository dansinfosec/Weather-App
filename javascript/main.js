const apikey = "396e46213aa0cd618afcb2133dfa4415";
const api_url = "http://api.openweathermap.org/data/2.5/weather?q=tetouan&units=metric";

async function checkWeather() {
    const response = await fetch(api_url + `&APPID=${apikey}`);
    const data = await response.json();
    
    console.log(data);
}

checkWeather(); // Call the function to check the weather