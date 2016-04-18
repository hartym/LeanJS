Docker
======

Small helpers exist to help you build docker images from your project.

The docker image name that will get built is defined by the `$DOCKER_IMAGE` environment variable,
and you can change its default value in `Makefile`.

To build an image, run:

.. code-block:: shell

    make docker-build

You can customize target image name on the fly:

.. code-block:: shell

    DOCKER_IMAGE=acme/foobar make docker-build

To run the image, exposing the port on docker server machine:

.. code-block:: shell

    make docker-run
