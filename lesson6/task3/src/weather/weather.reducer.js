import { WEATHER_DATA_LIST } from './weather.actions';

const weatherData = {
  weatherDataList: [],
};

export default (state = weatherData, action) => {
  switch(action.type){
    case WEATHER_DATA_LIST: return {
      weatherDataList: action.payload.datalist,
    };
    default: return state;
  }
};