import { combineReducers } from 'redux';
import HomeReducer from './components/Home/HomeReducer';

const rootReducer = combineReducers({ 
  homeForm: HomeReducer
});

export default rootReducer;