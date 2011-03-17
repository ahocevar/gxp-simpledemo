# gxp-simpledemo

The intention of this project is to show a simple example for an application created
from http://github.com/opengeo/readygxp.

## Debug Mode

Loads all scripts uncompressed.

    ant init
    ant debug

This will give you an application available at http://localhost:8080/ by
default.  You only need to run `ant init` once (or any time dependencies
change).

To run the application under a different port (e.g. 9080), use

    ant debug -Dapp.port=9080

To use any GeoServer instance, e.g. http://localhost:8080/geoserver, use

    ant debug -Dapp.port=9080 -Dapp.proxy.geoserver=http://localhost:8080/geoserver

## Prepare App for Deployment

To create a servlet run the following:

    ant

The servlet will be assembled in the build directory.
