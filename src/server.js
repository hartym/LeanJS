/**
 * This is the «server» entry point.
 */

import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { match, browserHistory, RouterContext } from 'react-router'
import Helmet from 'react-helmet'

import config from '../config'

import Application from './application'
import configureStore from './store'

import assets from './assets';

/**
 * Create HTML from router props.
 */
function render(initialState, props) {
  let innerHtml = ReactDOMServer.renderToString(<RouterContext {...props} />);
  let head = Helmet.rewind();
  let mainJs = assets.main.js;
  let mainCss = assets.main.css ? `<link href="${assets.main.css}" media="all" rel="stylesheet" />` : '';

  return `<!doctype html>
<html ${head.htmlAttributes.toString()}>
  <head>
    ${head.title.toString()}
    ${head.meta.toString()}
    ${head.link.toString()}
    ${mainCss}
  </head>
  <body>
    <div id="root">${innerHtml}</div>
    <script>window.__INITIAL_STATE__  = ${JSON.stringify(initialState)};</script>
    <script src="${mainJs}"></script>
  </body>
</html>`;
}

/**
 * Configure server
 */
function configureServer(server, component) {
  // Add production middlewares
  if (!config.DEBUG) {
    server.use(require('compression')())
  }

  // Static files middleware
  server.use(express.static(path.join(__dirname, './public/')))

  let store = configureStore();

  // Main handler
  server.get('*', (req, res) => {
    match({
      routes: component({ history: browserHistory, store }),
      location: req.url
    }, (err, redirect, props) => {
      if (err) {
        res.status(500).send(err.message)
      } else if (redirect) {
        res.redirect(redirect.pathname + redirect.search)
      } else if (props) {
        // RENDER
        res.send(render(store.getState(), props));
      } else {
        res.status(404).send('Not Found')
      }
    })
  });

  return server;
}

let server = configureServer(new express(), Application);

server.listen(config.PORT, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("🌎 — The server is running. http://localhost:%s/", config.PORT)
  }
});
