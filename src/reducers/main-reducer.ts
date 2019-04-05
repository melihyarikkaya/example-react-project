import { SET_ISLOADING } from '../constants/action-types';

export interface MainState {
  isLoading: boolean;
}
const mainState: MainState = {
  isLoading: false
};

export default function mainReducer(state: MainState = mainState, action: any) {
  switch (action.type) {
    case SET_ISLOADING:
      return Object.assign({}, state, { isLoading: action.isLoading });
    default:
      return state;
  }
}
