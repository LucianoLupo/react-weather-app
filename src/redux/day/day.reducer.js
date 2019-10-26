

import DayActionTypes from './day.types';


const INITIAL_STATE = {
  selectedDay:null,
};

const dayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DayActionTypes.SELECT_DAY:
      return {
        ...state,
        selectedDay:action.payload
      };
    default:
      return state;
  }
};

export default dayReducer;
