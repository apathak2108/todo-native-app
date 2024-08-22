import {combineReducers} from 'redux';
import homeReducer from './reducers';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
