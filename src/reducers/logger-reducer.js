import { SET_ISLOADING } from '../constants/action-types';

const initialState = { isLoading: false };

export default function loggerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ISLOADING:
      return Object.assign({}, state, { isLoading: action.isLoading });
    default:
      return state;
  }
}
