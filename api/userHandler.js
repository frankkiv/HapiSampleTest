const data = require('../database/user-data');
// console.log(data.createRandDatas(20));

function getUserList(req, res){
    // const params = 'number' in req.params ? req.params.number : 0;
    console.log('getUserList');
    return data.userDatas
};

function getUserDetail(req, res){
    const id = 'id' in req.params ? req.params.id : 0;
    if (id in data.userDatas){
        return data.userDatas[id]
    }else{
        return null
    }
}

module.exports = {
    getUserList,
    getUserDetail
};