import {INCREASE_COUNTER} from './actionTypes';

const initialState = {
  count: 1,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      console.log('button pressed');
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default homeReducer;
