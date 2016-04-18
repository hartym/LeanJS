Reloading
=========

Server side reloading with nodemon
::::::::::::::::::::::::::::::::::

...


Client side reloading with Hot Module Reload
::::::::::::::::::::::::::::::::::::::::::::

Hot Module Reload, or HMR, is a client-side feature that enables the hot-swapping of frontend
javascript components without even having to reload the page.

Client will replace objects by transparent proxies, poll server for asset changes and change the
underlying proxied objects whenever it can.

This mechanism is complex, and may not work correctly if the stars did not get the proper
alignment. In case of problems, you should reload the page.