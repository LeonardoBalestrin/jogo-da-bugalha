function rollD6(){
    return Math.round(Math.random()*6)+1;
}

let mesaP1=[],mesaP2=[]

function contarFrequencias(arr) {
    const frequencias = {};
    // Conta as ocorrências de cada elemento no array
    arr.forEach(item => {
        frequencias[item] = (frequencias[item] || 0) + 1;
    });
    // Converte o objeto de frequências em um array de pares [elemento, contagem]
    return Object.entries(frequencias).map(([key, value]) => [parseInt(key), value]);
}

// Exemplo de uso
const arr = [6, 6, 3];
const resultado = contarFrequencias(arr);
console.log(resultado);