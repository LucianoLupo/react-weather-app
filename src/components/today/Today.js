import React from 'react'
import { connect } from 'react-redux';

import {
    Container,
    Header,
    Temperature,
    TemperatureData,
    Data,
    Info,

} from './today.styles';

const Today = ({selectedDay, location}) => {

    return (
        selectedDay && location ? 
        <Container>
            <Header>
                <h1>{selectedDay.city} {selectedDay.country}</h1>
                <h3>{selectedDay.dayName}</h3>
                <h3>{selectedDay.description}</h3>
            </Header>
            <Info>
                <Temperature>
                    <img src={selectedDay.iconWeatherSrc} alt="icon"/>
                    <TemperatureData>
                        <h1> {selectedDay.temp} </h1>
                        <p>ºc </p>
                    </TemperatureData>
                </Temperature>
                <Data>
                    <h3>Humidity: {selectedDay.humidity} %</h3>
                    <h3>Wind Speed: { selectedDay.windSpeed }  m/s </h3>
                </Data>
            </Info>
        </Container>
        :
        <h1>Loading...</h1>
    )
}

const mapStateToProps = (state) => {
    return {location: state.daysStore.location,
            selectedDay: state.day.selectedDay,
    };
};

export default connect(
  mapStateToProps
)(Today);
