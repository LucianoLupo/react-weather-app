import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { fetchLocationStart } from '../../redux/days-list/days-list.actions';
import { Container } from './days-list.styles';

import Day from '../day/Day';

const DaysList = ({fetchLocationStart, list}) => {

    useEffect(() => {
        fetchLocationStart();
      }, [fetchLocationStart])

    return (
        <Container>
            {
                list ?  
                list.map((day , index) => {
                    return (
                        <Day key={index} day={day} />
                    )
                })
                : 
                <>
                <h1>Loading...</h1>
                </>
            }
        </Container>
    )
}

const mapStateToProps = (state) => {
    return { list: state.daysStore.days,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchLocationStart: () => dispatch(fetchLocationStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DaysList);
