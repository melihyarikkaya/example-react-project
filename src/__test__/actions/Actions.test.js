import * as actions from '../../actions/actions';
import * as types from '../../constants/action-types';

describe('Actions', () => {
  describe('setIsloading', () => {
    it('should defined', () => {
      expect(actions.setIsloading).toBeDefined();
    });
    it('should equal a function', () => {
      expect(typeof actions.setIsloading).toBe('function');
    });
    it('should create an action to set the isLoading', () => {
      expect(actions.setIsloading(true)).toEqual({
        type: types.SET_ISLOADING,
        isLoading: true
      });
    });
  });
});
