import configureStore from '../../configureStore';
import * as types from '../../constants/action-types';

describe('Store with configureStore', () => {
  let store = null;
  beforeAll(() => {
    store = configureStore(undefined);
  });
  afterAll(() => {
    store = null;
  });

  describe('loggerReducer', () => {
    it('should have a loggerReducer', () => {
      expect(store.getState().loggerReducer).toBeDefined();
    });
    describe('should dispatch an action to set the related state', () => {
      it('set isLoading with setIsLoading actions', () => {
        let action = {
          type: types.SET_ISLOADING,
          isLoading: true
        };
        expect(store.dispatch(action)).toEqual(action);
        expect(store.getState().loggerReducer.isLoading).toEqual(action.isLoading);
      });
    });
  });
});
