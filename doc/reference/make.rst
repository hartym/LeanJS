Make
====

We use the old school GNU Make to manage shell entry points in LeanJS. You may prefer to use
Gulp, Grunt, or some other task manager, but we don't see any feature that we need and that Make
does not provide.

It has the advantage to be understandable by non-javascript persons, including
ops, and we use it to provide a language agnostic interface to our projects (we provide the same
commands whether the project is written using javascript, python, ruby, java, php, ...).

The pros may be not very important for you, feel free to change the way you manage this.

Targets
:::::::

start (default)
---------------

**Usage**: `make start` or `make`

Throws up a development server (see :doc:`server`).

.. literalinclude:: ../../Makefile
    :lines: 10-13


build
-----

**Usage**: `make build`

Compiles a production ready build in the `build` folder.

.. literalinclude:: ../../Makefile
    :lines: 15-18


install
-------

**Usage**: `make install`

Wraps `npm install`, installs all project dependencies under `node_modules`, including development
dependencies.

.. literalinclude:: ../../Makefile
    :lines: 20-22


