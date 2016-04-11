/**
 * Store.js
 * ========
 * Manage the application redux store.
 */

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';

/**
 * Factory for root reducer, taking into account things like react-router. Will
 * be used for store creation, but also replacing the root reducer if required
 * because of HMR.
 */
function buildRootReducer() {
  return combineReducers({
    ...require('./reducers').default,
    routing: routerReducer,
  });
}

/**
 * Store Factory.
 * Enables chrome extension based react development tools.
 *
 * TODO Should probably do it only if DEBUG.
 */
export default function configureStore(history, initialState) {
  const store = createStore(
    buildRootReducer(),
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history)
      ),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(buildRootReducer())
    });
  }

  return store;
}
