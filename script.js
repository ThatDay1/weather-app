const URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "765d17f88e50f5aec7ae4e95e646c693";

const setApp = (e) => {
    //console.log(e);
    if (e.code == "Enter") {getResult(search.value);}
}

const getResult = (city) => {
    console.log(city);

    let api = `${URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`;
    fetch(api)
        .then(weather => weather.json())
        .then(displayResult)
}

const displayResult = (data) => {
    console.log(data);

    const city = document.querySelector(".city");
    city.innerText = `${data.name} ${data.sys.country}`

    const temp = document.querySelector(".temp");
    temp.innerText = `${Math.round(data.main.temp)}°C`

    const desc = document.querySelector(".desc");
    desc.innerText = `${data.weather[0].description}`

    const minmax = document.querySelector(".minmax")
    minmax.innerText = `${Math.round(data.main.temp_min)}°C / ${Math.round(data.main.temp_max)}°C`
}

const search = document.getElementById("search");
search.addEventListener("keypress", setApp);