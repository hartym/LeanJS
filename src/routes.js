import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import Layout from './example/components/Layout'
import Home from './example/components/Home'
import About from './example/components/About'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
  </Route>
);

if (module.hot) {
  module.hot.accept()
}
