import DaysListActionTypes from './days-list.types';



export const fetchLocationStart = () => ({
  type: DaysListActionTypes.FETCH_LOCATION_START
});

export const fetchLocationSuccess = location => ({
  type: DaysListActionTypes.FETCH_LOCATION_SUCCESS,
  payload: location
});

export const fetchLocationFailure = errorMessage => ({
  type: DaysListActionTypes.FETCH_LOCATION_FAILURE,
  payload: errorMessage
});



export const fetchWeatherStart = () => ({
  type: DaysListActionTypes.FETCH_WEATHER_START,

});

export const fetchWeatherSuccess = weather => ({
  type: DaysListActionTypes.FETCH_WEATHER_SUCCESS,
  payload: weather
});

export const fetchWeatherFailure = errorMessage => ({
  type: DaysListActionTypes.FETCH_WEATHER_FAILURE,
  payload: errorMessage
});
