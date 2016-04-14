LeanJS
======

Yet another starter kit for Universal NodeJS applications using React, Redux,
Webpack and Bootstrap 4.


.. image:: https://travis-ci.org/hartym/LeanJS.svg?branch=master
    :target: https://travis-ci.org/hartym/LeanJS


.. image:: https://david-dm.org/hartym/LeanJS.svg
    :target: https://david-dm.org/hartym/LeanJS


.. image:: https://coveralls.io/repos/github/hartym/LeanJS/badge.svg?branch=master
    :target: https://coveralls.io/github/hartym/LeanJS?branch=master


.. image:: https://readthedocs.org/projects/leanjs/badge/?version=latest
    :target: http://leanjs.readthedocs.org/en/doc/?badge=latest
    :alt: Documentation Status


Dependencies
::::::::::::

* Babel
* Express
* React (15)
* React Router
* Redux
* Webpack

And a few glue libraries (like react-redux and react-router-redux).

Tests, coverage and code style
::::::::::::::::::::::::::::::

* ESLint with "JavaScript Standard Style" and a few addons to make it behave correctly with React.
* Istanbul
* Karma
* Tape

Directory structure:

* bin: management and instrumentation scripts.
* build: production releases (out of version control).
* coverage: generated coverage data (out of version control).
* config: declarative configuration, including webpack configuration.
* src: application(s) source code.
* test: tests, using tape as a default.


Install
:::::::

    npm install


Run (development)
:::::::::::::::::

    make


Tests and code style check
::::::::::::::::::::::::::

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


----

Made with ♥ by `Romain Dorgueil <https://twitter.com/rdorgueil>`_ and `contributors <https://github.com/hartym/LeanJS/graphs/contributors>`_.
