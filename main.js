const apiKey = "bd646c20a4cb97ef6cea6c3bb2fca9be";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".WeatherIcon");

async function checkWeather(city) {
    const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
   
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds"){
        WeatherIcon.src = "images/clouds.png";
    } 
    else if (data.weather[0].main == "Clear"){
        WeatherIcon.src = "images/clear.png";
    } 
    else if (data.weather[0].main == "Rain"){
        WeatherIcon.src = "images/rain.png";
    } 
    else if (data.weather[0].main == "Snow"){
        WeatherIcon.src = "images/snow.png";
    } 
    else if (data.weather[0].main == "Drizzle"){
        WeatherIcon.src = "images/drizzle.png";
    } 
    else if (data.weather[0].main == "Mist"){
        WeatherIcon.src = "images/mist.png";
    } 
     else if (data.weather[0].main == "Thunderstorm"){
        WeatherIcon.src = "images/thunder.png";
    } 

    document.querySelector(".weather").style.display = "block";
 
}
searchbtn.addEventListener("click" ,()=> {
    checkWeather(searchbox.value);
});




// hello ji
