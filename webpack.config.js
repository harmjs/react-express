const merge = require('webpack-merge');
const client = require('./webpack_client_configs.js');
const server = require('./webpack_server_configs.js');

//const TARGET = process.env.npm_lifecycle_event;

module.exports = [
  merge(client.common, client.development),
  merge(server.common, server.development)
];


/*
if(TARGET === "build"){
  module.exports = [
    merge(client.common, client.development),
    //merge(server.common, server.development)
  ];
}

if(TARGET === "start"){
  module.exports = [
    merge(client.common, client.production),
    //merge(server.common, client.production)
  ];
}
*/