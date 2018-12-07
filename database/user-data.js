'use strict';

class userData {
    constructor(id) {
        this.id = id;
        this.name = this.randomName()+id+'@gmail.com';
        this.onlinestatus = this.randomStatus();
        this.onduration = null;
        this.offduration = null;
        this.desc = '';
    }
    randomStatus(){
        return Math.random() >= 0.4 
    }
    randomName(){
        return Math.random().toString(36).substr(2, 8)
    }
}

function createRandDatas(number) {
    let resArray = [];
    for(let i=1; i<=number; i++){
        resArray.push(new userData(i));
    }
    return resArray;
}

function addUser(data){
    this.userDatas.push(data);
}

const userDatas = createRandDatas(500)

module.exports ={
    userDatas,
    addUser
}

// const usersData = [
//     {
//         id: 1,
//         name: 'test@gmail.com',
//         onlinestatus: true,
//         onduration: null,
//         offduration: null,
//         desc: '',
//     },
//     {
//         id: 2,
//         name: 'test2@gmail.com',
//         onlinestatus: true,
//         onduration: null,
//         offduration: null,
//         desc: '',
//     },
//     {
//         id: 3,
//         name: 'test3@gmail.com',
//         onlinestatus: false,
//         onduration: null,
//         offduration: null,
//         desc: '',
//     }
// ];
