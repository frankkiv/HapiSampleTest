'use strict';

const Hapi = require('hapi');
const routes = require('./routes/route');

const server = new Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route(routes);

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();

module.exports = server;
