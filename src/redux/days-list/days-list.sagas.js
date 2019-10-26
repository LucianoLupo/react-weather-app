import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import { fetchLocationSuccess, fetchLocationFailure, fetchWeatherSuccess, fetchWeatherFailure, fetchWeatherStart as fetchWeatherStartCall } from './days-list.actions';
import { selectDay } from '../day/day.actions';
import { returnListOfDays } from './days-list.utils'; 

import {location, weather, nextFiveDays} from './mocks';
import DayActionTypes from './days-list.types';
import { from } from 'rxjs';


export function* fetchLocationAsync( {payload} ){

    console.log("coords",!payload) 
    try {
        

        const data = yield axios.get('http://ip-api.com/json/');
        let coords;

        // TODO sacar estos mocks
        //const data = location
        // let coords
        if ( !payload || !payload.lat || !payload.lon ){    
            coords = {
                lat:data.data.lat,
                lon:data.data.lon
            }
        } else {
            coords = payload
        }

        console.log(coords)
        // yield put(fetchLocationSuccess(data.data));
        yield put(fetchLocationSuccess(data));

        yield put(fetchWeatherStartCall())
        yield fetchWeatherAsync(coords);
    } catch (error) {
        yield put(fetchLocationFailure(error.message));
    }

    // const getData = () => axios.get('http://ip-api.com/json/').then((res) => {
    //     console.log(res.data)
    //   }).catch(error => dispatch(fetchLocationFailure(error.message)))
    // getData()
}

export function* fetchLocationStart() {
    yield takeLatest(
        DayActionTypes.FETCH_LOCATION_START,
        fetchLocationAsync
    );
}




export function* fetchWeatherAsync(coords){
    console.log("weather call",coords)


    const apiKey ='e0842dbfe9f0e14cbc05dbde911d7bf7';
    try {
        //TODO ojo este mock
        // const data = yield axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`);
        // yield put(fetchWeatherSuccess(data.data));
        const currentWeather = weather
        const nextFiveDays = yield axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`);
        console.log(nextFiveDays)

        let cleanedList = returnListOfDays(nextFiveDays.data)
        console.log(cleanedList)

        console.log(cleanedList)
        yield put(fetchWeatherSuccess(cleanedList));
        yield put(selectDay(cleanedList[0]));


        
    } catch (error) {
        yield put(fetchWeatherFailure(error.message));
    }

    // const getData = () => axios.get('http://ip-api.com/json/').then((res) => {
    //     console.log(res.data)
    //   }).catch(error => dispatch(fetchLocationFailure(error.message)))
    // getData()
}




export function* listSagas() {
    yield all([call(fetchLocationStart)])
}