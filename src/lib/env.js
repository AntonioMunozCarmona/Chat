'use strict';

module.exports = getEnv;

/**
* Obtiene el ambiente actual basado en la variable NODE_ENV
**/

function getEnv() {
    return {
        name: process.env.NODE_ENV ? process.env.NODE_ENV : 'production'
    };
}
