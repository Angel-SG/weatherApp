import React from 'react';
import WeatherIcons from 'react-weathericons';
// import PropTypes from 'prop-types';
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE,

} from './../../../constants/weathers';


const icons = {
  [CLOUD]: 'cloud',
  [SUN]: 'day-sunny',
  [RAIN]: 'rain',
  [SNOW]: 'snow',
  [THUNDER] : 'day-thunderstore',
  [DRIZZLE] : 'day_showers',
};

const getWeatherIcon = weatherState => {
  const icon = icons[weatherState];

  if (icon)
    return  <WeatherIcons className="weather-icon" name={icon} />;
  else
    return  <WeatherIcons className="weather-icon" name={'day-sunny'} />;
}

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="weather-temperature-outer">
    {
      getWeatherIcon(weatherState)
    }
    <span className="temperature">{ `${temperature} `}</span>
    <span className="temperature-type">{` C` }</span>
  </div>
);

// WeatherTemperature.propTypes = {
//   temperature: PropTypes.number.isRequired,
//   weatherState: PropTypes.string.isRequired,
// };

export default WeatherTemperature;