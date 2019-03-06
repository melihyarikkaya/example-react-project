import { combineReducers } from 'redux';

import loggerReducer from './logger-reducer';

const rootReducer = combineReducers({
  loggerReducer
});

export default rootReducer;
