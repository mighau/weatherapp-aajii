import React, { useEffect, useState } from 'react';
import weatherService from './services/weatherService';
import locationService from './services/locationService';
import Weather from './components/Weather';
import Alert from './components/Alert';

const App = () => {
  const [alert, setAlert] = useState(null);
  const [weatherConditions, setWeatherConditions] = useState({});
  const [location, setLocation] = useState({});

  useEffect(() => {
    const fetchLocation = async () => {
      if (!navigator.geolocation) {
        setAlert('Geolocation is not supported by your browser');
      } else {
        navigator.geolocation.getCurrentPosition((position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setAlert(null);
        });
      }
    };
    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchCity = async () => {
      if (location.latitude && location.longitude) {
        setLocation({
          ...location,
          city: `${(await locationService.getCity(location)).city}`,
        });
        setAlert(null);
      }
    };
    fetchCity();
  }, [weatherConditions]);

  useEffect(() => {
    const fetchWeather = async () => {
      if (location.latitude && location.longitude) {
        const weatherData = await weatherService.getWeatherFromApi(location);
        const weatherObj = {
          current: weatherData.current,
          hourly: weatherData.hourly,
        };
        setWeatherConditions(weatherObj);
      }
    };
    fetchWeather();
  }, [location]);

  return (
    <div>
      {alert && <Alert message={alert} />}
      {location.latitude && location.longitude && weatherConditions.current ? (
        <Weather
          location={location}
          current={weatherConditions.current}
          hourly={weatherConditions.hourly}
        />
      ) : (
        <h3 className="wrong">
          Everything is fine, I just need to fetch the data :)
        </h3>
      )}
    </div>
  );
};
export default App;
