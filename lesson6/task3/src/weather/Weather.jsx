import React, { Component } from 'react';
import { connect } from 'react-redux';
import weatherDataListSelector from './weather.selectors';
import { getWeatherData } from './weather.actions';

class Weather extends Component {
  componentDidMount() {
    this.props.getWeatherData();
  }
  render() {
    return (
      <ul className="cities-list">
        {
          this.props.weatherData.map(weatherPlace => {
            return <li key={weatherPlace.id} className="city">
              <span className="city__name">{weatherPlace.name}</span>
              <span className="city__temperature">{weatherPlace.temperature}</span>
            </li>
          })
        }
      </ul>
    );
  }
};

const mapState = state => {
  return {
    weatherData: weatherDataListSelector(state),
  };
};
const mapDispatch = { getWeatherData, };

export default connect(mapState, mapDispatch)(Weather)