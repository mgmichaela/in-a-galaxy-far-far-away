const MARS_API_URL = 'https://api.nasa.gov/insight_weather/?api_key=HdDgcgvRWAfjf9ebbR2m2tRvpAOGjLLW6GFlQdAA&feedtype=json&ver=1.0';
const EARTH_API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=1eea2605d5a02721c4d5a1fbbe6a2bfb';
const EARTH_API_KEY = '1eea2605d5a02721c4d5a1fbbe6a2bfb'; 

//Mars
const getMarsTemperature = async () => {
  try {
    const response = await apiRequest(MARS_API_URL, 'GET');
    delete response.validity_checks;
    delete response.sol_keys;
    for (const day in response) {
      if (response[day].AT.av) {
        return response[day].AT.av
      } 
    }
  } catch (error) {
    console.log(error);
  }
};

//Earth
const getEarthTemperature = async () => {
  try {
    const response = await apiRequest(EARTH_API_URL, 'GET');
    const kelvin = response.main.temp;
    let celsius = convertToCelsius(kelvin);
    celsius = Math.round(celsius);
    if(celsius === -0) {
      celsius = 0;
    }
    return celsius;
  } catch (error) {
    console.log(error);
  }
};

const getEarthForecast = async () => {
  try {
    const response = await apiRequest(EARTH_API_URL, 'GET');
    const forecast = response.weather[0].main;
    return forecast;
  } catch (error) {
    console.log(error);
  }
};

//Earth
function convertToCelsius(kelvin) {
  const celsius = kelvin - 273.15;
  return celsius;
}

//Mars and Earth
function convertToFahrenheit(celsius) {
  const fahrenheit = celsius * 9 / 5 + 32;
  return fahrenheit;
}

const earthForecast = document.querySelector('.r7_weather_earth');
const earthTemperatureCelsius = document.querySelector('.r7_celsius_earth');
const earthTemperatureFahrenheit = document.querySelector('.r7_fahrenheit_earth');
const temperatureCel = document.querySelector('.r7_celsius_mars');
const temperatureFah = document.querySelector('.r7_fahrenheit_mars');

getMarsTemperature().then((marsTemperature) => {
  if(marsTemperature){
    temperatureCel.innerHTML = marsTemperature;
    const marsTemperatureFahrenheit = convertToFahrenheit(marsTemperature);
    temperatureFah.innerText = marsTemperatureFahrenheit;
  } else {
    temperatureCel.innerText = "unavailable";
  }
});

getEarthTemperature().then((celsius) => {
  const fahrenheit = convertToFahrenheit(celsius);
  earthTemperatureCelsius.innerHTML = celsius;
  earthTemperatureFahrenheit.innerHTML = fahrenheit;
});

getEarthForecast().then ( (forecast) => {
  earthForecast.innerHTML = forecast;
});
 