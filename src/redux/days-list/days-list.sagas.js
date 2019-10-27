import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import { fetchLocationSuccess, fetchLocationFailure, fetchWeatherSuccess, fetchWeatherFailure, fetchWeatherStart as fetchWeatherStartCall } from './days-list.actions';
import { selectDay } from '../day/day.actions';
import { returnListOfDays } from './days-list.utils'; 
import DayActionTypes from './days-list.types';


export function* fetchLocationAsync( {payload} ){
    try { 
        const data = yield axios.get('http://ip-api.com/json/');
        let coords;
        if ( !payload || !payload.lat || !payload.lon ){    
            coords = {
                lat:data.data.lat,
                lon:data.data.lon
            }
        } else {
            coords = payload
        }
        yield put(fetchLocationSuccess(data.data));
        yield put(fetchWeatherStartCall(coords))

    } catch (error) {
        yield put(fetchLocationFailure(error.message));
    }
}

export function* fetchLocationStart() {
    yield takeLatest(
        DayActionTypes.FETCH_LOCATION_START,
        fetchLocationAsync
    );
}

export function* fetchWeatherStart() {
    yield takeLatest(
        DayActionTypes.FETCH_WEATHER_START,
        fetchWeatherAsync
    );
}

export function* fetchWeatherAsync({payload}){

    const coords = payload
    const apiKey ='e0842dbfe9f0e14cbc05dbde911d7bf7';

    try {
        const nextFiveDays = yield axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`);
        let cleanedList = returnListOfDays(nextFiveDays.data)

        yield put(fetchWeatherSuccess(cleanedList));
        yield put(selectDay(cleanedList[0]));
    } catch (error) {
        yield put(fetchWeatherFailure(error.message));
    }
}


export function* listSagas() {
    yield all([call(fetchLocationStart),call(fetchWeatherStart)])
}