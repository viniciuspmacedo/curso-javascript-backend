const {editoraUm} = require('./listaLivros');

function mergeSort(lista){
        
    if(lista.length > 1){
        let meio = Math.floor(lista.length/2);
        let array1 = mergeSort(lista.slice(0, meio));
        let array2 = mergeSort(lista.slice(meio, lista.length));
        
        lista = merge(array1, array2);
    }
 
    return lista;
    
}

function merge(arr1, arr2){
    let posAtual1 = 0;
    let posAtual2 = 0;
    let resultado = [];

    while(posAtual1 < arr1.length && posAtual2 < arr2.length){
        let itemAtual1 = arr1[posAtual1];
        let itemAtual2 = arr2[posAtual2];


        if(itemAtual1.preco < itemAtual2.preco){
            resultado.push(itemAtual1);
            posAtual1++;
        }else{
            resultado.push(itemAtual2);
            posAtual2++;
        }
    }

    return resultado.concat(posAtual1 < arr1.length ? arr1.slice(posAtual1): arr2.slice(posAtual2));
    
}

console.log( mergeSort(editoraUm));