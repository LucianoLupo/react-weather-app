
import React from 'react';
import { connect } from 'react-redux';

import { selectDay } from '../../redux/day/day.actions';
import { Container, MaxMinContainer, MaxMin } from './day.styles';

const Day = ({day, selectDay}) => {
    return (
        <Container onClick={() => selectDay(day)}>
            <p> {day.dayName}</p>
            <img src={day.iconWeatherSrc} alt="icon"/>
            <MaxMinContainer> 
                <MaxMin>
                    <p>max:</p>
                    <h4>{day.max}</h4>
                </MaxMin>
                <MaxMin>
                    <p>min:</p>
                    <h4>{day.min}</h4>
                </MaxMin>
            </MaxMinContainer>
        </Container>
    )
}


const mapStateToProps = (state) => {
    return { list: state.daysStore.days,
    };
};

const mapDispatchToProps = dispatch => ({
    selectDay: (day) => dispatch(selectDay(day))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Day);
