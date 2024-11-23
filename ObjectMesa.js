arrExemplo1=[1,2,3];
arrExemplo2=[6,6,6];
arrExemplo3=[3,4,5];
arrExemplo4=[0,0,0];
arrExemplo5=[0,0,0];

//criação do Objeto Mesa dos jogadores
function Mesa(arr1,arr2,arr3){
    this.cols=[arr1,arr2,arr3];
    this.totalPoints = 0;
    this.sumPointsCols();
}
function TotalPointsOfArray(arr){
    //se todos os elementos do array forem diferentes deve soma-los
    //se houverem 2 elementos iguais, deve multiplicar seu valor por 4 e somar com o terceiro elemento
    //se houverem 3 elementos iguais, deve multiplica-lo por 9
    const uniqueValues = [...new Set(arr)]; // Obtém valores únicos no array

    if (uniqueValues.length === 1) {
        // Caso 3 elementos iguais
        return uniqueValues[0] * 9;
    } else if (uniqueValues.length === 2) {
        // Caso 2 elementos iguais
        const repeatedValue = arr.find(value => arr.filter(v => v === value).length === 2);
        const singleValue = uniqueValues.find(value => value !== repeatedValue);
        return repeatedValue * 4 + singleValue;
    } else {
        // Caso todos os elementos diferentes
        return arr.reduce((sum, value) => sum + value, 0);
    }
}
Mesa.prototype.sumPointsCols = function(){
    this.totalPoints = 0;
    this.cols.forEach(col => {
        this.totalPoints += TotalPointsOfArray(col);
    });
}
Mesa.prototype.updtCol = function(idxCol,idxArr,value){
    this.cols[idxCol][idxArr] = value;
    this.sumPointsCols();
}
Mesa.prototype.DeleteNumberOfCollumn = function(idxCol,number){
    this.cols[idxCol] = this.cols[idxCol].map(value => value === number ? 0 : value);
    this.sumPointsCols();
}

let mesa1 = new Mesa(arrExemplo1,arrExemplo2,arrExemplo3);
let mesa2 = new Mesa(arrExemplo5,arrExemplo4,arrExemplo2);

module.exports = Mesa;