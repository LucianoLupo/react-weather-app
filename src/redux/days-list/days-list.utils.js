
import moment from 'moment';


export function returnListOfDays(data) {

        let today = new Date().getDate();

        let newList = []
        newList.length = 6
        for (let i = 0; i < newList.length ; i++) {
            newList[i] = {
                city:data.city.name,
                country:data.city.country,
                dayId:i,
                dayName:null,
                iconWeather:null,
                min:null,
                max:null,
                hourOfDay:null,
                description:null,
                humidity:null,
                pressure:null,
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
                        day.humidity = detail.main.humidity
                        day.pressure = detail.main.pressure
                        day.windSpeed = detail.wind.speed
                    }

                })
                day.min =Math.min(...min).toFixed(2)
                day.max = Math.max(...max).toFixed(2)
                day.dayName = moment(day.detailOnHours[0].dt_onTimeZome).format('dddd')
                day.temp = (day.detailOnHours[0].main.temp / 10).toFixed(2)

                day.hourOfDay = hourOfDay;
                return day
            })

        }
        return newList
} 