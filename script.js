const timeElement = document.getElementsByClassName("time");
const dateElement = document.getElementById("date");
const currentWeatherItemsElement = document.getElementById("current-weather-items");
const timeZoneElement = document.getElementById("time-zone");
const countryElement = document.getElementById("country");
const weatherForecastElement = document.getElementById("weather-forecast");
const currentTempElement = document.getElementById("current-temp");


const daysOfTheWeek = ["Domingo", "Lunes", "Martes", "Miercoles",
    "Jueves", "Viernes", "Sábado"
];

const monthsOfTheYear = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];


const API_KEY = "ec313ea781255a3010af77f62c6e6438";

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    //const hoursIn12HrFormat = hour >= 13 ? hour %12: hour;
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    timeElement.innerHTML = hour + ':' + minutes + ' ' +
        `<span id="am-pm">${ampm}</span>`;

    dateElement.innerHTML = daysOfTheWeek[day] + ", " + monthsOfTheYear[month] + " "
    date;

}, 1000);

getWeatherData();

function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);

        let {
            latitude,
            longitude
        } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json).then(data => {

            console.log(data);
            showWeatherData(data);
        })
    });
}

//this whole block is Array Destructuring:
function showWeatherData(data) {
    let {
        humidity,
        pressure,
        sunrise,
        sunset,
        wind_speed
    } = data.current; 
}

