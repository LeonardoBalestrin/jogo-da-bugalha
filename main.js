//import Mesa from './ObjectMesa'
const Mesa = require('./ObjectMesa');

function rollD6(){
    return Math.round(Math.random()*5)+1;
}

let mesa1 = new Mesa(arrExemplo1,arrExemplo2,arrExemplo3);
mesa1.updtCol(0,arrExemplo4)

console.log(mesa1.cols[0]);
