import axios from 'axios';

const baseURL = 'http://0.0.0.0:9000/api';

// fetching the city of the user according to the coordinates
const getCity = async ({ latitude, longitude }) => {
  const response = await axios.get(`${baseURL}/city/${latitude}/${longitude}`);
  return response.data;
};

export default { getCity };
