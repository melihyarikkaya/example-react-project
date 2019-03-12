import loggerReducer from '../../reducers/logger-reducer';
import * as types from '../../constants/action-types';

const initialState = {
  isLoading: false
};

describe('loggerReducer', () => {
  it('should return the initinal state', () => {
    expect(loggerReducer(undefined, {})).toEqual({
      isLoading: false
    });
  });
  it(`should handle ${types.SET_ISLOADING}`, () => {
    expect(
      loggerReducer(undefined, {
        type: types.SET_ISLOADING,
        isLoading: initialState.isLoading
      }).isLoading
    ).toEqual(initialState.isLoading);
  });
});
