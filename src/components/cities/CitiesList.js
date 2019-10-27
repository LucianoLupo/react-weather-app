import React from 'react'
import { connect } from 'react-redux';

import { fetchLocationStart } from '../../redux/days-list/days-list.actions';
import { list } from './data';
import{ Container, City } from './cities-list.styles';

const CitiesList = ({fetchLocationStart}) => {

    return (
        <Container>
            {
                list ?  
                list.map((city, index) => {
                    return (
                        <City key={index} onClick={() => fetchLocationStart({lat:city.lat,lon:city.lon})}>
                            <h4>{city.subCity}</h4>
                            {
                                index !== 0 ?
                                <p>({city.city})</p>
                                :
                                <>
                                </> 
                            }
                        </City>
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
