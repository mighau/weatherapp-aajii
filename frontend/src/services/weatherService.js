import axios from 'axios';

const baseURL = 'http://0.0.0.0:9000/api';

const getWeatherFromApi = async ({ latitude, longitude }) => {
  const response = await axios.get(
    `${baseURL}/weather/${latitude}/${longitude}`
  );

  return response.data;
};

export default { getWeatherFromApi };
