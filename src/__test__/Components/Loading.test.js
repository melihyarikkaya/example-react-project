import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import configureMockStore from 'redux-mock-store';
import loggerReducer from '../../reducers/logger-reducer'; // for get initial state

import Loading from '../../components/Loading';

describe('When Loading component rendered it', () => {
  let wrapper;
  let store;
  let mockStore;
  let fakeSetIsloading = jest.fn();
  let initialState = loggerReducer(undefined, {});

  beforeEach(() => {
    mockStore = configureMockStore();
    store = mockStore(initialState);
    wrapper = shallow(
      <Loading store={store} setIsloading={fakeSetIsloading} isLoading={initialState.isLoading} />
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should match last snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Span text should be equal isLoading prop.', () => {
    it('If isLoading is false, span text should be FALSE', () => {
      expect(wrapper.find('h3>span').text()).toEqual('FALSE');
    });
    it('If isLoading is false, span text should be FALSE', () => {
      wrapper.setProps({ isLoading: true });
      expect(wrapper.find('h3>span').text()).toEqual('TRUE');
    });
  });

  it('should render the button', () => {
    expect(wrapper.exists('button')).toEqual(true);
  });

  it('should have an isLoading props', () => {
    const state = wrapper.instance().props.store.getState();
    expect(state.isLoading).toEqual(false);
  });

  it('should have a _setIsloading function', () => {
    expect(typeof wrapper.instance()._setIsloading).toEqual('function');
  });

  describe('When clicked button', () => {
    it('should trigger _setIsloading function', () => {
      let wrapperInstance = wrapper.instance();
      let stubbedFunc = sinon.stub(wrapperInstance, '_setIsloading').callsFake(() => {});
      wrapperInstance.forceUpdate();
      wrapper.find('button').simulate('click');
      expect(stubbedFunc.called).toEqual(true);
    });

    it('should trigger this.props.setIsloading redux action, when _setIsloading called', () => {
      let wrapperInstance = wrapper.instance();
      wrapperInstance._setIsloading();
      expect(wrapperInstance.props.setIsloading).toHaveBeenCalledWith(true);
    });
  });

  it('should render <span> tag which has text "FALSE"', () => {
    expect(wrapper.find('.state').text()).toEqual('FALSE');
  });
});
