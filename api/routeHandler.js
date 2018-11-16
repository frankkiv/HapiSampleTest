//Temp data for test case, doesn't really matters
//const data = require('../database/db-data');
//console.log(data.dbMessages);

function getPathParams(req, res){
    const params = 'id' in req.params ? req.params.id : null;
    console.log("getPathParams");
    console.log(req.method);
    console.log(params);
    return params
};
function getMultiPathParams(req, res){
    const params = req.params ? req.params : null;
    console.log("getMultiPathParams");
    console.log(req.method);
    console.log(req.params);
    return params
}
function getQueryParams(req, res){
    const params = req.query ? req.query : null;
    console.log("getQueryParams");
    console.log(req.method);
    console.log(params);
    return params
}
function getHeaderParams(req, res){
    const id =  req.headers.id ? req.headers.id : null;
    const group =  req.headers.group ? req.headers.group : null;
    console.log("getHeaderParams");
    return [id,group]
};
function postBodyParams(req, res){
    const params = req.payload
    console.log("postBodyParams");
    console.log(req.method);
    console.log(params);
    return params
};

module.exports = {
    getPathParams,
    getMultiPathParams,
    getQueryParams,
    getHeaderParams,
    postBodyParams
};