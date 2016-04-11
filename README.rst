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

Directory structure:

* bin: all scripts to help manage the project should go here.
* build: where we build production releases.
* config: all declarative configuration should go here, including webpack configuration.
* src: all your application(s) source code belongs to there.



Install
:::::::

    npm install


Run (development)
:::::::::::::::::

    make


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

