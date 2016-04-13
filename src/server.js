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
import morgan from 'morgan'


function renderElementWithState (store, element) {
  const innerHtml = ReactDOMServer.renderToString(element)
  const head = Helmet.rewind()

  const assets = require('../build/assets')
  const mainJs = assets.main.js
  const mainCss = assets.main.css
    ? `<link href="${assets.main.css}" media="all" rel="stylesheet" />` : ''

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
 * Create HTML from router props.
 */
function render (store, renderProps) {
  return renderElementWithState(store, (
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    )
  )
}

/**
 * Configure server
 */
function createHandler (handler) {
  handler = handler || new Express();

  handler.use(morgan('combined'))
  // Add production middlewares
  if (!config.DEBUG) {
    handler.use(require('compression')())
  }

  // Static files middleware
  handler.use(Express.static(path.join(__dirname, './public/')))

  // Main handler
  handler.get('*', (req, res) => {
    const memoryHistory = createMemoryHistory(req.url)
    const store = configureStore(memoryHistory)
    const history = syncHistoryWithStore(memoryHistory, store)

    match({ history, routes: routes, location: req.url }, (error, redirectLocation, renderProps) => {
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

  return handler
}


const defaultHandler = createHandler()

/**
 * Serve that shit.
 *
 * WARNING: Don't change the server message output to the console, as it is
 * for now used in a regexp to detect server reload. This is an heritage from
 * react-starter-kit, I guess they had a good reason to use this hack even if
 * I'd like to remove it.
 */
if (require.main === module) {
  require('http').createServer(defaultHandler).listen(config.PORT, () => {
    console.log('[http] Listening to :' + config.PORT);
  })
}

export default defaultHandler

