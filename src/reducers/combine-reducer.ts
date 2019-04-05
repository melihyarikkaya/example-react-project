import { combineReducers } from 'redux';
import mainReducer, { MainState } from './main-reducer';

export interface State {
  mainReducer: MainState;
}

const combineReducer = combineReducers<State>({
  mainReducer
});
export default combineReducer;
