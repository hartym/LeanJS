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
import ExampleApplication from './example-application'
import configureStore from './store'

// Special import that is built by webpack's AssetPlugin, containing the
// computed names of our assets (with hashes).
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

/**
 * Serve that shit.
 *
 * WARNING: Don't change the server message output to the console, as it is
 * for now used in a regexp to detect server reload. This is an heritage from
 * react-starter-kit, I guess they had a good reason to use this hack even if
 * I'd like to remove it.
 */
let server = configureServer(new express(), ExampleApplication);

server.listen(config.PORT, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("🌎 — The server is running. http://localhost:%s/", config.PORT)
  }
});
