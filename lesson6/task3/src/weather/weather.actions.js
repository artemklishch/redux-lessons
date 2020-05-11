import { getDataFromServer } from './weather.gateway';

const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

export const WEATHER_DATA_LIST = 'WEATHER_DATA_LIST';
const getWeatherDataList = datalist => {
  return {
    type: 'WEATHER_DATA_LIST',
    payload: { datalist, },
  };
};

export const getWeatherData = () => {
  return function(dispatch){
    getDataFromServer(baseUrl)
      .then(weatherData => dispatch(getWeatherDataList(weatherData)));
  }
};