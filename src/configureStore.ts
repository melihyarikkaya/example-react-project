import { createStore, applyMiddleware, compose, Middleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import combineReducer from './reducers/combine-reducer';

declare var window: any;
declare var module: any;

const LOAD_DEBUG_EXTENSION: string = 'development';

const configureStore = (preLoadedState: any) => {
  const middlewares: Array<Middleware> = [thunk];
  if (process.env.NODE_ENV === LOAD_DEBUG_EXTENSION) {
    middlewares.push(createLogger());
  }

  const composed: any = [applyMiddleware(...middlewares)];

  if (process.env.NODE_ENV === LOAD_DEBUG_EXTENSION) {
    composed.push(
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        : () => {}
    );
  }

  const store: Store = createStore(combineReducer, preLoadedState, compose(...composed));

  if (process.env.NODE_ENV === LOAD_DEBUG_EXTENSION && module.hot) {
    module.hot.accept('./reducers/combine-reducer', () => {
      const nextRootReducer = require('./reducers/combine-reducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
