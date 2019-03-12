import React from 'react';
import { shallow } from 'enzyme';

import App from '../../components/App';

describe('App Component', () => {
  describe('Snapshot', () => {
    it('should match last snapshot', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
