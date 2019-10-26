import DayActionTypes from './day.types';



export const selectDay = (day) => ({
  type: DayActionTypes.SELECT_DAY,
  payload: day
});
