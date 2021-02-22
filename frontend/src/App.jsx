import React, { useEffect, useState } from 'react';
import weatherService from './services/weatherService';
import locationService from './services/locationService';
import Weather from './components/Weather';
import Alert from './components/Alert';

const App = () => {
  const [alert, setAlert] = useState(null);
  const [weatherConditions, setWeatherConditions] = useState({});
  const [location, setLocation] = useState({});
  const [city, setCity] = useState('...');
  const [cityError, setCityError] = useState('');

  useEffect(() => {
    const fetchLocation = async () => {
      /* eslint-disable-next-line no-undef */
      if (!navigator.geolocation) {
        const newAlert = 'Geolocation is not supported by your browser';
        setAlert(newAlert);
      } else {
        /* eslint-disable-next-line no-undef */
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            const newAlerts = `Enable location to use the service. Error: ${error.message}`;
            setAlert(newAlerts);
          }
        );
      }
    };
    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      if (location.latitude && location.longitude) {
        try {
          const weatherData = await weatherService.getWeatherFromApi(location);
          const weatherObj = {
            current: weatherData.current,
            hourly: weatherData.hourly,
          };
          setWeatherConditions(weatherObj);
          setAlert(null);
        } catch (error) {
          setAlert(`Backend error occurred: ${error.message}`);
        }
      }
    };
    fetchWeather();
  }, [location]);

  useEffect(() => {
    const fetchCity = async () => {
      if (location.latitude && location.longitude) {
        try {
          const fetchedCity = (await locationService.getCity(location)).city;
          setCity(fetchedCity);
          setCityError(null);
        } catch (error) {
          setCityError(`Could not locate your city: ${error.message}`);
        }
      }
    };
    fetchCity();
  }, [weatherConditions]);

  return (
    <div>
      {alert && <Alert message={alert} />}
      {cityError && <Alert message={cityError} />}
      {location.latitude && location.longitude && weatherConditions.current ? (
        <Weather
          location={location}
          city={city}
          current={weatherConditions.current}
          hourly={weatherConditions.hourly}
        />
      ) : !alert ? (
        <h2>Please wait...</h2>
      ) : (
        <h2>Unable to continue to the service.</h2>
      )}
    </div>
  );
};
export default App;
