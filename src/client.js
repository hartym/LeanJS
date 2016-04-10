/**
* This is the «browser» entry point.
*/

// Libraries
import 'babel-polyfill'
import FastClick from 'fastclick';
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// Local imports
import configureStore from './store'
import routes from './routes'

// Styles
import appStyles from './styles/index.scss'

// Configure store and browser-friendly history
const store = configureStore(browserHistory, window.__INITIAL_STATE__);
const history = syncHistoryWithStore(browserHistory, store);

// Apparently, fat fingers need to go faster on mobiles. Or is it browsers?
FastClick.attach(document.body);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
