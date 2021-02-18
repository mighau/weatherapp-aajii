require('dotenv').config();
const fetch = require('node-fetch');

const appId = process.env.APPID || '';
const gcpId = process.env.GCP_APIKEY || '';

const mapURI =
  process.env.MAP_ENDPOINT || 'http://api.openweathermap.org/data/2.5';
const gcpURI = `https://maps.googleapis.com/maps/api/geocode/json`;

const fetchWeather = async ({ latitude, longitude }) => {
  const endpointForWeather = `${mapURI}/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,daily,alerts&units=metric&appid=${appId}`;
  const response = await fetch(endpointForWeather);
  return response ? response.json() : {};
};

const fetchCity = async ({ latitude, longitude }) => {
  console.log(latitude, longitude);

  const endpointForCity = `${gcpURI}?latlng=${latitude},${longitude}&key=${gcpId}`;
  const response = await fetch(endpointForCity);
  return response ? response.json() : {};
};

module.exports = {
  fetchWeather,
  fetchCity,
};
