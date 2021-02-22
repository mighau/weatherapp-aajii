import axios from 'axios';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async ({ latitude, longitude }) => {
  const response = await axios.get(
    `${baseURL}/weather/${latitude}/${longitude}`
  );

  return response.data;
};

export default { getWeatherFromApi };
