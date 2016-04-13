/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import webpack from 'webpack'
import webpackClientConfig from '../config/webpack/client'
import webpackServerConfig from '../config/webpack/server'
import logStats from './lib/log-stats'

/**
 * Creates application bundles from the source files.
 */
function bundle () {
  return new Promise((resolve, reject) => {
    webpack(webpackClientConfig).run((err, stats) => {
      if (err) {
        return reject(err)
      }
      logStats('webpack/browser', stats);

      webpack(webpackServerConfig).run((err2, stats2) => {
        if (err2) {
          return reject(err2)
        }
        logStats('webpack/server', stats2)

        return resolve()
      })
    })
  })
}

export default bundle;
