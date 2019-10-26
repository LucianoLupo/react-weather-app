import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import axios from 'axios';
import Today from './components/today/Today';
import DaysList from './components/days-list/DaysList';
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
    <div>
      <Today/>
      <DaysList/>
    </div>
  );
}

export default App;
