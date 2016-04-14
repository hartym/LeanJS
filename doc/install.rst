Getting started
===============

Install
:::::::

.. code-block:: shell

    git clone https://github.com/hartym/LeanJS.git MyNextProject
    cd MyNextProject
    make install


Develop
:::::::

* Launch the development server:

  .. code-block:: shell

      make

* Open http://localhost:3001/ in your browser.
* Code.

Test
::::


.. code-block:: shell

    make lint
    make test


Release
:::::::

* Without docker, you can build a vanilla node project, just release the `build` directory once
  you've run:

.. code-block:: shell

    make build

* With docker, it's even easier. Build a self-sufficient image with

.. code-block:: shell

    make docker-build

