import axios from 'axios';

const baseURL = 'https://weatherapp-wn3jf3onvq-uc.a.run.app/api';

const getWeatherFromApi = async ({ latitude, longitude }) => {
  const response = await axios.get(
    `${baseURL}/weather/${latitude}/${longitude}`
  );

  return response.data;
};

export default { getWeatherFromApi };
