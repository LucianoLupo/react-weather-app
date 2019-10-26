import React from 'react'
import { connect } from 'react-redux';

import {
    Container,
    Header,
    Temperature,
    Data,
    Info,

} from './today.styles';

const Today = ({selectedDay, location}) => {

    // const day = list[selectedDay]
    console.log( selectedDay )
    return (
        selectedDay && location ? 
        <Container>
            <Header>
                <h1>{location.city} {location.regionName}</h1>
                <h3>{selectedDay.dayName}</h3>
                <h3>{selectedDay.description}</h3>
            </Header>
            <Info>
                <Temperature>
                    <h1> {selectedDay.iconWeather} </h1>
                    <img src={selectedDay.iconWeatherSrc} alt="icon"/>
                    <h1> {selectedDay.temp} </h1>
                    <p>ºc </p>
                </Temperature>
                <Data>
                    <h3>Presipitaciones</h3>
                    <h3>Humedad</h3>
                    <h3>Viento</h3>
                </Data>
            </Info>

        </Container>

        :
        <h1>Loading</h1>

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
