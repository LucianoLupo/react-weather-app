import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Container, AppContainer } from './app.styles';
import Today from './components/today/Today';
import DaysList from './components/days-list/DaysList';
import CitiesList from './components/cities/CitiesList';
import Modal from './components/modal/Modal'

const App = ({ isFetchingWeather }) => {
  const isFetching = isFetchingWeather  

  return (
    <AppContainer>
      <Container>
        <Today/>
        <DaysList/>
        <CitiesList/>
        <Modal open={isFetching}/>
      </Container>
    </AppContainer>

  );
}


const mapStateToProps = (state) => {
  return { isFetchingWeather: state.daysStore.isFetchingWeather
  };
};

export default connect(
mapStateToProps
)(App);
