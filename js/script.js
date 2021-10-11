const API_KEY = `652e61d3c33ee7c77c9ae5ef5f241cbf`;

const searchTemperature = async () => {
    const UserInput = document.getElementById('search-field').value;
    UserInput.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${UserInput}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    displayTemperature(data);
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = city => {
    setInnerText('city', city.name);
    setInnerText('temperature', city.main.temp);
    setInnerText('condition', city.weather[0].main);
    // set weather icon
    const url = `https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}