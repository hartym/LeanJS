Features
========

Included batteries
::::::::::::::::::

`React <https://facebook.github.io/react/>`_
--------------------------------------------

`React <https://facebook.github.io/react/>`_ is a modern templating engine that makes development
of highly interractive user interfaces fun, fast, and "reactive".

In LeanJS, the library is used both browser-side and server-side, as our «isomorphic» rendering
engine.

* https://facebook.github.io/react/


`Redux <http://redux.js.org/>`_
-------------------------------

`Redux <http://redux.js.org/>`_ is a «predictable state container» for JavaScript applications. In
ohter terms, it's a library to manage the «state of your application», and more importantly, how
do your application transition from one state to another. The library is very simple, but the
underlying concepts are very powerful.

* http://redux.js.org/
* https://egghead.io/series/getting-started-with-redux


`React Router <https://github.com/reactjs/react-router>`_
---------------------------------------------------------

`React Router <https://github.com/reactjs/react-router>`_ is a complete routing solution for
React. It works well in the «isomoprhic environment», abstracting the concept of «history» and
«location» to be able to manage it the same way in the browser and on a server.

* https://github.com/reactjs/react-router
* https://github.com/reactjs/react-router-tutorial
* https://github.com/reactjs/react-router/tree/master/docs


`Express <http://expressjs.com/>`_ (see :doc:`reference/server`)
-------------------------------------------------------------------

`Express <http://expressjs.com/>`_, not to be presented anymore, is a minimalist web application
development framework.

* http://expressjs.com/
* https://github.com/senchalabs/connect/blob/master/Readme.md


`Bootstrap 4 <http://v4-alpha.getbootstrap.com/getting-started/introduction/>`_ and `Font Awesome <https://fortawesome.github.io/Font-Awesome/icons/>`_ (see :doc:`reference/style`)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

`Bootstrap 4 <http://v4-alpha.getbootstrap.com/getting-started/introduction/>`_ and
`Font Awesome <https://fortawesome.github.io/Font-Awesome/icons/>`_ are so popular nowadays
for prototypes (and even production apps) that it felt logic to package them in the boilerplate,
pre-configured, ready to be extended and correctly setup to work both in dev and prod mode.

Removing them from the base setup is way easier than adding it, only a few lines to remove.

Attention, we include the plain vanilla SCSS versions of those libraries, with no wrappers (no,
we don't ship with Bootact-Restrap). If you want one of those low value libs, feel free to have
fun in your project.


`SASS <http://sass-lang.com/>`_ (see :doc:`reference/style`)
------------------------------------------------------------

`SASS <http://sass-lang.com/>`_ is our CSS preprocessor of choice. It is already used by bootstrap,
font-awesome and other well enginered fronted libraries, making it very easy to integrate and
customize it.


Developer toolbox
:::::::::::::::::

On top of those features, that will be used the same way in development and in production mode, a
few features are also there in development mode only.

GNU Make (see :doc:`reference/make`)
------------------------------------

Build automation tool from 1977, readable by computer scientists, and language agnostic. It is
the reference and only entry point of developer tools in LeanJS.

Docker (see :doc:`reference/docker`)
------------------------------------

We use docker a lot to have reproductible builds of our apps. While it is not required that you
use this feature, if you do, you can to build and run production image running
`make docker-build docker-run`.

Webpack (see :doc:`reference/webpack`)
--------------------------------------

In development mode, webpack is used via the webpack-dev-middleware, which basically is a
connect middleware that serve the always-hot version of your compiled assets.

In production mode, webpack is used to compile both frontend and backend javascript, into
build. Just try to run `make build` and you'll get a clean and fresh production release in your
build directory. You're only a `(cd build; npm install --production && node server)` away of
running a lighting fast, pure, tool-free version of your project.

ESLint (see :doc:`reference/testing`)
-------------------------------------

`make lint` is your friend.

Help needed about the "right" coding standards for React/ES6/Node.

`Karma <https://karma-runner.github.io/>`_, `Tape <https://github.com/substack/tape>`_ and `Istanbul <https://gotwarlost.github.io/istanbul/>`_ (see :doc:`reference/testing`)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

`make test` is your friend.

It will create a `coverage` directory with the matching reports.

`Browsersync<https://www.browsersync.io/>`_ and `Nodemon <http://nodemon.io/>`_ (see :doc:`reference/server`)
-----------------------------------------------------------------------------------------------------------------

We use browser sync as a proxy for a few reasons.

* It allows to serve the vanilla express application on a different port and add the development
  tooling middlewares only on this proxy, making easier to debug tedious problems with server
  output.

* It has nice features for both cross-platform development and simulating catastrophic network
  conditions, because you know, your customer won't use your own laptop on this dual gigabit fiber
  channel directly plugged on the EU to NA backbone.

Hot Module Reload (see :doc:`reference/hot-module-reload`)
----------------------------------------------------------

This is trendy, this is hot, and yet it can fuck up your brain because it does not work as
expected.

In short, HMR is a way to swap module instances hen you change the files on disk. Save Foo.js, a
watcher will see it, rebuild it with webpack, communicate that something changed to your browsers
and try to hot swap the minimum subset of the module dependency tree that is needed to have the
new module versions show up in the browsers. Magic happens, boom.

That's the theory. Practical notes, though.

Caveats: won't work with pure, stateless, function-based react components. won't work with router.

When in doubt, refresh anyway.
