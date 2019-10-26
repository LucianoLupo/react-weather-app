import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Container } from './app.styles';
import axios from 'axios';
import Today from './components/today/Today';
import DaysList from './components/days-list/DaysList';
import CitiesList from './components/cities/CitiesList'
const App = () => {

  // const getData = () => axios.get('http://ip-api.com/json/').then((res) => {
  //   console.log(res.data)
  // })

  // const getDataAsync = async () => {
  //   const data = await axios.get('http://ip-api.com/json/')
  //   console.log(data)
  //   return data
  // }

  // getData();
  // getDataAsync();

  return (
    <Container>
      <Today/>
      <DaysList/>
      <CitiesList/>
    </Container>
  );
}

export default App;
