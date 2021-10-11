const loadWeatherData = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&APPID=652e61d3c33ee7c77c9ae5ef5f241cbf`)
    .then(res => res.json())
    .then(data => displayWeatherStatus(data));
}
const displayWeatherStatus = city => {
    const weatherStatus = document.getElementById('weather-status');
    weatherStatus.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png">
        <h1>${city.name}, ${city.sys.country}</h1>
        <h3><span>${kelvinToCelcius(city.main.temp)}</span>&deg;C</h3>
        <h1 class="lead">${city.weather[0].main}</h1>
    `;
    weatherStatus.appendChild(div)
}

const kelvinToCelcius = kelvin => {
    // 304.14K − 273.15 = 30.99°C
    const celcius = kelvin - 273.15;
    return celcius.toFixed(2);
}