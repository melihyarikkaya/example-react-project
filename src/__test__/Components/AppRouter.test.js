import React from 'react';
import { shallow } from 'enzyme';

import AppRouter from '../../components/AppRouter';

describe('AppRouter Component', () => {
  describe('Snapshot', () => {
    let wrapper = null;
    beforeEach(() => {
      wrapper = shallow(<AppRouter />);
    });
    afterEach(() => {
      wrapper = null;
    });
    it('should match last snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
    it('should have two <li> tag in <ul> tag', () => {
      expect(wrapper.find('ul>li')).toHaveLength(2);
    });
  });
});
