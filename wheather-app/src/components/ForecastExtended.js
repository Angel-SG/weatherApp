import React, { Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import CircularProgress from '@material-ui/core/CircularProgress';

import './styles.css';


// const days = [
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday',
// ];

// const data = {
//   temperature: 10,
//   humidity: 10,
//   weatherState: 'normal',
//   wind: 10,
// }

const api_key = '07505242bb0c156ea0bccd3892f39313';
const url = 'http://api.openweathermap.org/data/2.5/forecast';


class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = { forecastData: null }
  }

  componentDidMount() {
    this.updateCity(this.props.city);

  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.props.city) {
      this.setState({ forecastData: null })
      this.updateCity(nextProps.city)
    }
  }

  updateCity = city => {
    const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;

    fetch(url_forecast).then(
      data => (data.json())
    ).then(
      weather_data => {
        console.log(weather_data);
        const forecastData = transformForecast(weather_data);
        console.log(forecastData);
        this.setState({ forecastData });
      }
    )
  }

  renderForecastItemDays(forecastData) {
    
    return forecastData.map( forecast => (
        <ForecastItem  
          key={`${forecast.weekDay}${forecast.hour}`}
          weekDay={forecast.weekDay} 
          hour={forecast.hour} 
          data={forecast.data}
           />));
  }

  renderProgress = () => {
   
    return (
      <CircularProgress /> 
    )

  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;

    return (
    <div>
      <h2 className="forecast-title">Extended Forecast for {city} </h2>
        {
          forecastData ?
          this.renderForecastItemDays(forecastData) :
          this.renderProgress()
        }
    </div>);
  }
}

ForecastExtended.prototypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;