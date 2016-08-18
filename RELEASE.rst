How to create a new release?
============================

Cleanup
:::::::

First of all, make sure you're checking from a clean working copy.

.. code-block:: shell

    make clean

Test & build & test again
:::::::::::::::::::::::::

.. code-block:: shell

    make install test build && (cd build; npm install --production; node server.js)
    http GET http://localhost:3080/

Good? Let's release a new version
:::::::::::::::::::::::::::::::::

Increment version number in package.json. Usually, you should only increment the patch number.

You need git-semver to use this (also doable by hand).

.. code-block:: shell

    VERSION=`git semver --next-patch`

    cp package.json package.json.bak
    sed 's/"version": ".*",/"version": "'$VERSION'",/g' package.json.bak > package.json

    git add package.json
    git commit -m "release: $VERSION"
    git tag -am $VERSION $VERSION
    git push origin master --tags

Release docker image
::::::::::::::::::::

.. code-block:: shell

    make docker-build docker-run

Test again, you never know ;)

.. code-block:: shell

    make docker-push



