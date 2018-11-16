
### How to parsing API parameters? (Based on Hapi.js)
#### 1. Path parameters
```javascript
//route.js
{ method: 'GET', path: '/api/group/{group}/user/{id}', handler: apiTest.getMultiPathParams },

//handler.js
function getMultiPathParams(req, res){
    const params = req.params ? req.params : null;
    return params
}
```
* e.g.
``` shell
curl -X GET "localhost:3000/api/group/Trend/user/John"

{"group":"Trend","id":"John"} //response
```
#### 2. Query parameters
```javascript
//route.js
{ method: 'GET', path: '/api/getQueryParams', handler: apiTest.getQueryParams }

//handler.js
function getQueryParams(req, res){
    const params = req.query ? req.query : null;
    return params
}
```
* e.g.
``` shell
curl -X GET "localhost:3000/api/getQueryParams?id=John&group=Trend"

{"group":"Trend","id":"John"} //response
```

#### 3. Header parameters
```javascript
//route.js
{ method: 'GET', path: '/api/getHeaderParams', handler: apiTest.getHeaderParams },

//handler.js
function getHeaderParams(req, res){
    const id =  req.headers.id ? req.headers.id : null;
    const group =  req.headers.group ? req.headers.group : null;
    return [id,group]
};
```
* e.g.
``` shell
curl -X GET -H "id: John" -H "group:Trend" "localhost:3000/api/getHeaderParams"

["John","Trend"] //response
```
#### 4. Request body parameters
```javascript
//route.js
{ method:['POST','PUT'], path: '/api/comment', handler: apiTest.postBodyParams }, 

//handler.js
function postBodyParams(req, res){
    const params = req.payload
    return params
};
```
* e.g.
``` shell
curl -X POST --data-binary '{"id":"John","text":"I love Trend"}' -H 'Content-Type: application/json' "localhost:3000/api/comment
//or
curl -X PUT --data-binary '{"id":"John","text":"I love Trend"}' -H 'Content-Type: application/json' "localhost:3000/api/comment"


{ id: 'John', text: 'I love Trend' } //response
```
Reference:[https://github.com/frankkiv/HapiSampleTest](https://github.com/frankkiv/HapiSampleTest)
