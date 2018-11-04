'use strict';

require('../src/lib/server').start();
require('babel-register')({
    presets: ['env']
});

module.exports = require('../server.js');