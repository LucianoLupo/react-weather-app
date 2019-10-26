
import React from 'react';
import { connect } from 'react-redux';

import { selectDay } from '../../redux/day/day.actions';
import { Container } from './day.styles';

const Day = ({day, selectDay}) => {
    return (
        <Container onClick={() => selectDay(day)}>
            <p> {day.dayName} {day.dayId}</p>
            <img src={day.iconWeatherSrc} alt="icon"/>

            <p>{day.max} / {day.min}</p>
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
