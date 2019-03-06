import React from 'react';
import { shallow } from 'enzyme';

import AppRouter from '../../components/AppRouter';

it('renders correctly', () => {
  const wrapper = shallow(<AppRouter />);

  expect(wrapper.exists()).toBe(true);
  expect(wrapper.find('ul>li')).toHaveLength(5);
  expect(wrapper).toMatchSnapshot();
});
