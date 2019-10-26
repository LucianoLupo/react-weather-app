

import DayActionTypes from './days-list.types';


const INITIAL_STATE = {
  isFetchingLocation:false,
  isFetchingWeather:false,
  location:null,
  days:null
};

const dayReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case DayActionTypes.FETCH_LOCATION_START:
      return {
        ...state,
        isFetchingLocation: true
      };
    case DayActionTypes.FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        isFetchingLocation: false,
        location: action.payload
      };
    case DayActionTypes.FETCH_LOCATION_FAILURE:
      return {
        ...state,
        isFetchingLocation: false,
        errorMessage: action.payload
      };
    case DayActionTypes.FETCH_WEATHER_START:
      return {
        ...state,
        isFetchingWeather: true
      };
    case DayActionTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isFetchingWeather: false,
        days: action.payload
      };
    case DayActionTypes.FETCH_WEATHER_FAILURE:
      return {
        ...state,
        isFetchingWeather: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default dayReducer;
