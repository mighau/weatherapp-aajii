const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async ({ latitude, longitude }) => {
  try {
    const response = await fetch(`${baseURL}/weather/${latitude}/${longitude}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }

  return {};
};

export default { getWeatherFromApi };
