Server
======

Development
:::::::::::

To run the development server, make sure the project dependencies, including development
dependencies, are installed (if in doubt, run `make install`), then fire up the development server
by simply running `make`.

After a little while, you'll have three different open ports listening for HTTP connections:

* On port 3080, the production-like express server will run. Thanks to nodemon, the server will be
  restarted whenever you change a file. The webpack managed assets won't be available though, so
  you should not try to develop looking at this port, it should only be useful to debug server-side
  rendering issues.
* On port 3000, Browsersync will serve the real application, by proxying the express server above.
  It will add some middlewares so your assets are available, and hot module replacement (HMR) will
  try to hot-swap frontend components that you change. It is not always possible, but it will try
  its best.
* On port 3001, Browsersync will serve its management interface. Go ahead and explore the features,
  as it's pretty cool.

Please note that if ports 3000-3001 are unavailable, browsersync will automatically choose another
port, incrementally (if port 3000 is unavailable, it will try port 3001, then 3002, etc...).


Production
::::::::::

On production, you'll run the express server in a context where webpack precompiled all assets,
making it effective.

To run it, you can `(make build; cd build; node server)`. Otherwise, you can simply `make build`
and use the release you just build in the `build` directory to run it however you want. That could
be docker (see :doc:`docker`), but you can pretty much do it any way you want.

