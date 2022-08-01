const { reject } = require("lodash");
const { resolve } = require("path");

function sumBumbers() {
    let result = 1 + 1

    if (result == 2) {
        sucessCallBack()
    } else {
        errorCallBack()
    }
}

function sucessCallBack() {
    console.log("YEah Number 2!!");
}

function errorCallBack() {
    console.log("Ops, something Wrong!");
}

sumBumbers()

//=======================================================

let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Sucesso')
    } else { 
        reject('Failed')
    }
})

p.then((message) =>{
    console.log('ISSO FOI UM ' + message);
}).catch((erro)=>{
    console.log('ISSO FOI UM ' + erro);
})

