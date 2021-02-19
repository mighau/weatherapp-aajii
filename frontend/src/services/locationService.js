const baseURL = process.env.ENDPOINT;

const getCoordinates = () => {
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    return {
      latitude,
      longitude,
    };
  };

  const error = () => {
    console.log('location unavailable');
    return 'Unable to retrieve your location';
  };

  if (!navigator.geolocation) {
    console.log('navigator unavailable');
    return 'Geolocation is not supported by your browser';
  } else {
    console.log('locating...');
    navigator.geolocation.getCurrentPosition((p) => success(p), error);
  }
};
// fetching the city of the user according to the coordinates
const getCity = async ({ latitude, longitude }) => {
  try {
    const response = await fetch(`${baseURL}/city/${latitude}/${longitude}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default { getCoordinates, getCity };
