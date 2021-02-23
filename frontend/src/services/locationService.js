import axios from 'axios';

const baseURL = 'https://weatherapp-wn3jf3onvq-uc.a.run.app/api';

// fetching the city of the user according to the coordinates
const getCity = async ({ latitude, longitude }) => {
  const response = await axios.get(`${baseURL}/city/${latitude}/${longitude}`);
  return response.data;
};

export default { getCity };
