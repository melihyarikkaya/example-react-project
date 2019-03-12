import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';

import LoadingContainer from '../../containers/Loading';
import Loading from '../../components/Loading';
import loggerReducer from '../../reducers/logger-reducer';

let middlewares = [thunk];

const mockStore = configureStore(middlewares);

describe('Container Loading', () => {
  let store;
  let initialState = {};

  beforeEach(() => {
    initialState = {
      loggerReducer: loggerReducer(undefined, {})
    };
    store = mockStore(initialState);
  });
  afterEach(() => {
    initialState = {};
    store = {};
  });

  it('should have a Loading component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <LoadingContainer />
      </Provider>
    );

    const container = wrapper.find(LoadingContainer);
    expect(container.find(Loading).length).toEqual(1);
    expect(container.find(Loading).props().isLoading).toEqual(false);
  });
});
