import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import moment from 'moment';
import { fetchLocationSuccess, fetchLocationFailure, fetchWeatherSuccess, fetchWeatherFailure, fetchWeatherStart as fetchWeatherStartCall } from './days-list.actions';
import { selectDay } from '../day/day.actions';
import {location, weather, nextFiveDays} from './mocks';
import DayActionTypes from './days-list.types';


export function* fetchLocationAsync(){

    try {
        

        // const data = yield axios.get('http://ip-api.com/json/');
        // const coords = {
        //     lat:data.data.lat,
        //     lon:data.data.lon
        // }

        // TODO sacar estos mocks
        const data = location

        const coords = {
            lat:data.lat,
            lon:data.lon
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

function returnListOfDays(data) {

        let today = new Date().getDate();

        let newList = []
        newList.length = 6
        for (let i = 0; i < newList.length ; i++) {
            newList[i] = {
                dayId:i,
                dayName:null,
                iconWeather:null,
                min:null,
                max:null,
                hourOfDay:null,
                description:null,
                detailOnHours:[]
            }
            data.list.forEach((hourInfo) => {
                let date = new Date((hourInfo.dt - data.city.timezone) * 1000  ).getDate() ;
                if (parseInt(date) === parseInt(moment(today, "DD-MM-YYYY").add('days', i).format('DD')) ) {
                    hourInfo.dt_onTimeZome = new Date((hourInfo.dt - data.city.timezone) * 1000  ) 
                    newList[i].detailOnHours.push(hourInfo)
                }
            })

            let hourOfDay = new Date(newList[0].detailOnHours[0].dt_onTimeZome).getHours()
            console.log(hourOfDay)
            newList = newList.map((day) => {
                let min = [];
                let max = [];
                day.detailOnHours.forEach((detail) => {
                    min.push(detail.main.temp_min / 10);
                    max.push(detail.main.temp_max / 10);
                    if (new Date(detail.dt_onTimeZome).getHours() === hourOfDay) {
                        day.iconWeather = detail.weather[0].icon
                        day.iconWeatherSrc = `http://openweathermap.org/img/wn/${detail.weather[0].icon}@2x.png`
                        day.description = detail.weather[0].description
                    }

                })
                day.min =Math.min(...min).toFixed(2)
                day.max = Math.max(...max).toFixed(2)
                day.dayName = moment(day.detailOnHours[0].dt_onTimeZome).format('dddd')
                day.temp = (day.detailOnHours[0].main.temp / 10).toFixed(2)

                day.hourOfDay = hourOfDay;
                console.log(day)
                return day
            })

        }
        console.log(newList)
        return newList
} 


export function* fetchWeatherAsync(coords){
    console.log("weather call",coords)


    const apiKey ='e0842dbfe9f0e14cbc05dbde911d7bf7';
    try {
        //TODO ojo este mock
        // const data = yield axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`);
        // yield put(fetchWeatherSuccess(data.data));
        const currentWeather = weather
        // const nextFiveDays = yield axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`);
        console.log(currentWeather)

        let cleanedList = returnListOfDays(nextFiveDays)
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