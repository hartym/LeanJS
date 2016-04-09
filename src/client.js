/**
 * This is the «browser» entry point.
 */

// Libraries
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import FastClick from 'fastclick';
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// Local imports
import Application from './application'
import configureStore from './store'

// Styles
import appStyles from './application.scss'

const store = configureStore(window && window.__INITIAL_STATE__ || undefined);
const history = syncHistoryWithStore(browserHistory, store);

FastClick.attach(document.body);

ReactDOM.render(
  <Application store={store} history={history} />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
