
const marsUrl = 'https://api.nasa.gov/insight_weather/?api_key=HdDgcgvRWAfjf9ebbR2m2tRvpAOGjLLW6GFlQdAA&feedtype=json&ver=1.0';

let temperature = document.querySelector('#celsius_mars');

const getMarsWeather = async () => {
  try {
      const response = await apiRequest(marsUrl, 'GET');
      const day = response.sol_keys[response.sol_keys.length - 1];
      const celsius = response[day].AT.av;
      temperature.innerText = celsius;
  } catch(error) {
      console.log(error);
  }
}

getMarsWeather();
