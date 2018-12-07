'use strict';

const Hapi = require('hapi');
const routes = require('./routes/route');
const actions = require('./actions');
const db = require('./database/user-data');
const port = process.env.PORT || 3000;

const server = new Hapi.server({
    port: port,
    host: 'localhost'
});


server.route(routes);

// Check current users in socket channel 
server.route({
    method: 'GET',
    path: '/channelusers/{roomId}',
    handler: function (req, res) {
        const promise = new Promise((resolve, reject)=>{
            io.in(req.params.roomId).clients((error, clients) => {
                if (error) throw error;
                // Returns an array of client IDs like ["Anw2LatarvGVVXEIAAAD"]
                db.addUser(
                    {
                        "id": 501,
                        "name": "test@gmail.com",
                        "onlinestatus": false,
                        "onduration": null,
                        "offduration": null,
                        "desc": ""
                        }
                )
                resolve(clients);
            })
        });
        return promise;
    }
});
  
const io = require('socket.io')(server.listener);
io.on('connection', (client) => {
    console.log("client connected...");

    client.on("join", function(data, cb) {
        try {
            console.log(`user ${data.username} tries to join ${data.room}`);
            client.join(data.room);
            cb(data.room);
        }catch(e){
            console.log(e);
        }
    });

    client.on(actions.UPDATE_USER, (user) => {
        console.log('update user', user);
        io.emit(actions.USER_UPDATED, user);
    });
    
    client.on(actions.ADD_USER, (user) => {
        console.log('add user', user);
        db.addUser(user);
        io.emit(actions.USER_ADDED, user);
    });

    client.on('disconnect', () => {
        console.log('client disconnected')
    });

});

const init = async () => {
    await server.start();
    console.log(`API server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();

module.exports = server;
