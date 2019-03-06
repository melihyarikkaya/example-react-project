import * as actions from '../../actions/actions';
import * as types from '../../constants/action-types';
import configureStore from '../../configureStore';

const store = configureStore(undefined, {});
const loggerReducer = store.getState().loggerReducer;

describe('actions', () => {
  it('should create task for initial state controls', () => {
    expect(loggerReducer).toEqual({
      isLoading: false
    });
  });

  it('should create an action to set isLoading', () => {
    const isLoading = true;
    const definedActions = {
      type: types.SET_ISLOADING,
      isLoading
    };
    expect(actions.setIsloading(isLoading)).toEqual(definedActions);
    expect(store.dispatch(definedActions)).toEqual(definedActions);
    expect(store.getState().loggerReducer.isLoading).toEqual(true);
  });
});
