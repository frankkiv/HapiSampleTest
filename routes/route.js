const handler =require('../api/routeHandler.js');
const userhandler =require('../api/userHandler.js');

module.exports = [
    { method: 'GET', path: '/api/user/{id}', handler: handler.getPathParams }, //curl -X GET "localhost:3000/api/User/John"
    { method: 'GET', path: '/api/group/{group}/user/{id}', handler: handler.getMultiPathParams }, //curl -X GET "localhost:3000/api/group/Trend/user/John"
    { method: 'GET', path: '/api/getQueryParams', handler: handler.getQueryParams }, //curl -X GET "localhost:3000/api/getQueryParams?id=John&group=Trend"
    { method: 'GET', path: '/api/getHeaderParams', handler: handler.getHeaderParams }, //curl -X GET -H "id: John" -H "group:Trend" "localhost:3000/api/getHeaderParams"
    { method:['POST','PUT'], path: '/api/comment', handler: handler.postBodyParams }, 
    //curl -X POST --data-binary '{"id":"John","text":"I love Trend"}' -H 'Content-Type: application/json' "localhost:3000/api/comment"
    //curl -X PUT --data-binary '{"id":"John","text":"I love Trend"}' -H 'Content-Type: application/json' "localhost:3000/api/comment"
    
    { method: 'GET', path: '/api/userlist', handler: userhandler.getUserList },
    { method: 'GET', path: '/api/userdetail/{id}', handler: userhandler.getUserDetail },
];
