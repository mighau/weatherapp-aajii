import React from 'react';
import Forecast from './Forecast';
const Weather = ({ location, current, hourly }) => {
  const timeConverter = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const formattedTime = `${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()} - ${date.getHours()}:${
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    }`;
    return formattedTime;
  };
  const currentIcon = current.weather[0].icon.slice(0, -1);
  const currentText = current.weather[0].main;
  const currentTime = timeConverter(current.dt);
  return (
    <div>
      <div className="weather">
        <h2>Weather conditions in {location.city}</h2>
        {currentText && (
          <p align="center">
            {currentTime} - <b>{currentText}</b>
          </p>
        )}
        {currentIcon && (
          <img
            src={`../img/${currentIcon}.svg`}
            alt={`Icon for "${currentText}"`}
          />
        )}
      </div>
      <div className="forecast">
        <h3>Later:</h3>
        <ul>
          {hourly &&
            hourly.map((f) => (
              <Forecast
                key={f.dt}
                forecastData={f}
                timeConverter={timeConverter}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Weather;
