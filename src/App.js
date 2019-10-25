import React from 'react';
import './App.css';

import Today from './components/today/Today';
import DaysList from './components/days-list/DaysList';
const App = () => {
  return (
    <div>
      <Today/>
      <DaysList/>
    </div>
  );
}

export default App;
