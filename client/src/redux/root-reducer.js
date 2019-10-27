import { combineReducers } from 'redux';
import dayReducer from './day/day.reducer';
import daysListReducer from './days-list/days-list.reducer';



const rootReducer = combineReducers({
  selectedDay: dayReducer,
  daysStore: daysListReducer,

});
export default rootReducer;
