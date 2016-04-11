/**
 * This is the «server» entry point.
 *
 * It will be used to render the server side, SEO-friendly, version of the site.
 */

import Express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { match, RouterContext, createMemoryHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Helmet from 'react-helmet'
import config from '../config'
import routes from './routes'
import configureStore from './store'


/**
 * Create HTML from router props.
 */
function render (store, renderProps) {
  let innerHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <RouterContext {...renderProps}/>
    </Provider>
  )
  let head = Helmet.rewind()

  let assets = require('./assets')
  let mainJs = assets.main.js
  let mainCss = assets.main.css ? `<link href="${assets.main.css}" media="all" rel="stylesheet" />` : ''

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
    <script>window.__INITIAL_STATE__  = ${JSON.stringify(store.getState())};</script>
    <script src="${mainJs}"></script>
  </body>
</html>`
}

/**
 * Configure server
 */
function configureServer (server) {
  // Add production middlewares
  if (!config.DEBUG) {
    server.use(require('compression')())
  }

  // Static files middleware
  server.use(Express.static(path.join(__dirname, './public/')))

  // Main handler
  server.get('*', (req, res) => {
    const memoryHistory = createMemoryHistory(req.url)
    const store = configureStore(memoryHistory)
    const history = syncHistoryWithStore(memoryHistory, store)

    match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        res.send(render(store, renderProps))
      } else {
        res.status(404).send('Not Found')
      }
    })
  })

  return server
}

/**
 * Serve that shit.
 *
 * WARNING: Don't change the server message output to the console, as it is
 * for now used in a regexp to detect server reload. This is an heritage from
 * react-starter-kit, I guess they had a good reason to use this hack even if
 * I'd like to remove it.
 */
let server = configureServer(new Express())

server.listen(config.PORT, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info('The server is running. http://localhost:%s/', config.PORT)
  }
})
