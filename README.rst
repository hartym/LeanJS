LeanJS
======

Yet another starter kit for Universal NodeJS applications using React, Redux,
Webpack and Bootstrap 4.

Dependency choice:

* Babel
* Express
* React (15)
* React Router
* Redux
* Webpack

And a few glue libraries (like react-redux and react-router-redux).

Tests, coverage and linting:

* ESLint with "JavaScript Standard Style" and a few addons to make it behave correctly with React.
* Istanbul
* Karma
* Tape

Directory structure:

* bin: management and instrumentation scripts
* build: production releases
* config: declarative configuration, including webpack configuration.
* src: application(s) source code.
* test: tape tests.


Install
:::::::

    npm install


Run (development)
:::::::::::::::::

    make


Tests and code style
::::::::::::::::::::

    make lint
    make test


Start hacking
:::::::::::::

An ``example`` application is provided, but do not do much for now. One good
approach to start hacking based on this starter kit is to clone the repository,
create a sibling directory to the example application and start coding your app
next to the examples.

It has two benefits:

1. You can still look at the example while trying to understand what the fuck I
   did in this package.

2. You can contribute back to the example or general skeleton easily.

Good luck. As you choosed react, you will waste a lot of time learning all the
javascript kiddos shenanigans.


Build (for production)
::::::::::::::::::::::

    make build


Build (for production, using docker)
::::::::::::::::::::::::::::::::::::

    make docker-build


Production run (using docker)
:::::::::::::::::::::::::::::

    make docker-run


Final word
::::::::::

Good luck.

