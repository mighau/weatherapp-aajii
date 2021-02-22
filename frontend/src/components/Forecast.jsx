import React from 'react';

const Forecast = ({ forecastData, timeConverter }) => {
  const text = forecastData.weather[0].main;
  const icon = forecastData.weather[0].icon.slice(0, -1);
  const temperature = `${Math.round(forecastData.temp * 10) / 10} °C`;

  return (
    <li>
      <p>
        {timeConverter(forecastData.dt).slice(-5)}: {temperature} -{' '}
        <b>{text}</b>
      </p>
      <img
        src={`../img/${icon}.svg`}
        className="forecastImage"
        alt={`Icon for "${text}"`}
      />
    </li>
  );
};

export default Forecast;
