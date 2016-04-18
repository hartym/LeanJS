Webpack
=======

Webpack is a powerfull tool. We split the configuration (found in `config/webpack`) in three
different files: `default.js`, `client.js` and `server.js`.

Both client and server configurations extend default, and if more targets (cordova, electron,
browser extensions, ...) were to be added to the project, a similar file structure could be kept.

The loaders configuration has been split, for better readability and code reuse.

Default configuration
:::::::::::::::::::::

Default configuration define the common chunks of configuration that will be used whatever the
target platform is.

.. literalinclude:: ../../config/webpack/default.js
    :language: javascript


Client configuration
::::::::::::::::::::

Client configuration (may be renamed to browser at some point, we'll see) is in charge of
transpiling the browser javascript so it can run in modern browsers.

.. literalinclude:: ../../config/webpack/client.js
    :language: javascript


Server configuration
::::::::::::::::::::

Server configuration is in charge of transpiling code required to run the production-ready express
server, to be directly run by the Node interpreter.

.. literalinclude:: ../../config/webpack/server.js
    :language: javascript

Loaders configuration
:::::::::::::::::::::

All loaders
-----------

.. literalinclude:: ../../config/webpack/loaders/index.js
    :language: javascript

Javascript
----------

.. literalinclude:: ../../config/webpack/loaders/javascript.js
    :language: javascript


Style
-----

.. literalinclude:: ../../config/webpack/loaders/style.js
    :language: javascript



