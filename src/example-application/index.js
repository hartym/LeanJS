// Libraries
import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

// Local imports
import Layout from './components'
import Home from './components/home'
import About from './components/about'

export default function ExampleApplication({store, history}) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home}/>
          <Route path="about" component={About}/>
        </Route>
      </Router>
    </Provider>
  )
}
