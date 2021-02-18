const baseURL = process.env.ENDPOINT;

const getCoordinates = async () => {
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    return {
      latitude,
      longitude,
    };
  };

  const error = () => {
    return 'Unable to retrieve your location';
  };

  if (!navigator.geolocation) {
    return 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
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
