/**
 * This is the «browser» entry point.
 *
 * Will load after the server version, and make the application "reactive". While it cannot be seen
 * by bots, it greatly enhances the human user experience by allowing insanely fast and fluid
 * navigation.
 *
 * TODO: make the hot reload thing work, react-router make it tough to get it right.
 */

import FastClick from 'fastclick'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store'

// Styles.
require('./styles/index.scss')

// Configure store and browser-friendly history
/* eslint-disable no-underscore-dangle */
const store = configureStore(browserHistory, window.__INITIAL_STATE__)
/* eslint-enable no-underscore-dangle */
const history = syncHistoryWithStore(browserHistory, store)

// Apparently, fat fingers need to go faster on mobiles. Or is it browsers?
FastClick.attach(document.body)

const render = () => {
  let routes = require('./routes').default // eslint-disable-line global-require

  // Render the client side react component.
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('root')
  )
}

render()
