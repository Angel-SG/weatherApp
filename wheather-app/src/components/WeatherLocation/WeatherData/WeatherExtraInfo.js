import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({ humidity, wind }) => (
  <div className="weather-info-outer">
    <span className="extra-info-text">{`Humidity: ${humidity} %`}</span>
    <span className="extra-info-text">{`Wind: ${wind}`}</span>
  </div>
);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;