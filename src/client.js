// Libraries
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import FastClick from 'fastclick';
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'

// Local imports
import Application from './application'
import configureStore from './store'

import appStyles from './application.scss'

FastClick.attach(document.body);

ReactDOM.render(
  <Application store={configureStore()} history={browserHistory} />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
