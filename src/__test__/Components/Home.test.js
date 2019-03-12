import React from 'react';
import { shallow } from 'enzyme';

import Home from '../../components/Home';

describe('When Loading component rendered it', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('should match last snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a <div> tag', () => {
    expect(wrapper.exists('div')).toEqual(true);
  });

  it('should render a <h1> tag in <div>', () => {
    expect(wrapper.exists('div>h1')).toEqual(true);
  });

  it('should be equal  <h1> text is Home Page ', () => {
    expect(wrapper.find('div>h1').text()).toEqual('Home Page');
  });
});
