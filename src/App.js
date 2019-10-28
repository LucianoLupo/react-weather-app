import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Container, AppContainer, InfoLinks } from './app.styles';
import Today from './components/today/Today';
import DaysList from './components/days-list/DaysList';
import CitiesList from './components/cities/CitiesList';
import Modal from './components/modal/Modal'
import BlockPage from './components/block-page/BlockPage'
import PopupHelp from './components/popup-help/PopupHelp'
const App = ({ isFetchingWeather }) => {
  const isFetching = isFetchingWeather  

  return (
    <AppContainer>
      <InfoLinks>
        <a href="https://lucianolupo.com" target="_blank">[lucianolupo.com]</a>
        <a href="https://github.com/LucianoLupo/react-weather-app" target="_blank">[gitHub project]</a>
      </InfoLinks>
      <Container>
        <Today/>
        <DaysList/>
        <CitiesList/>
        <Modal open={isFetching} >
          <BlockPage/>
        </Modal>
        {/* <PopupHelp/> */}
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
