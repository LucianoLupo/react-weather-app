import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { fetchLocationStart } from '../../redux/days-list/days-list.actions';

import {
    Container,

} from './cities-list.styles';

import Day from '../day/Day';

const list = [
    {
        city: 'Actual City',
        lat:null,
        lon:null,
    },
    {
        city: 'Paris',
        subCity:'Bagneux',
        lat:48.8,
        lon:2.3,
    },
    {
        city: 'London',
        subCity:'Lambeth',
        lat:51.5,
        lon:-0.1,
    },
    {
        city: 'New York City',
        subCity: 'City Line',
        lat:40.7,
        lon:-73.9,
    },
    {
        city: 'Singapore',
        subCity:'Tanglin Halt',
        lat:1.3,
        lon:103.8,
    },
    {
        city: 'Tokio',
        subCity:'Shōwajima',
        lat:35.6,
        lon:139.8,
    },
]

const CitiesList = ({fetchLocationStart}) => {

    return (
        <Container>
            {
                list ?  
                list.map((city, index) => {
                    return (
                        <div key={index} onClick={() => fetchLocationStart({lat:city.lat,lon:city.lon})}>
                            <h4>{city.city}</h4>
                        </div>
                    )
                })
                : 
                <>
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
    fetchLocationStart: (data) => dispatch(fetchLocationStart(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CitiesList);
