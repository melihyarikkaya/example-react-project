import * as types from '../../constants/action-types';

describe('Types', () => {
  describe('isloading', () => {
    it('should defined', () => {
      expect(types.SET_ISLOADING).toBeDefined();
    });
    it('should equal a text', () => {
      expect(types.SET_ISLOADING).toEqual('SET_ISLOADING');
    });
  });
});
