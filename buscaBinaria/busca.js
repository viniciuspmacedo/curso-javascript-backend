const livros = require('./listaordenada');

function buscaBinaria(array, valorBuscado){
    
    if(array.length == 0 || (array.length == 1 && array[0].preco !== valorBuscado)) return 'não encontrado'  
    let meio = Math.floor(array.length / 2);
    
    if(valorBuscado === array[meio].preco){
        return array[meio];
    }else if(valorBuscado > array[meio].preco){
        
        return buscaBinaria(array.slice(meio), valorBuscado)
    }else{
        
        return buscaBinaria(array.slice(0, meio), valorBuscado)
    }
}

console.log(buscaBinaria(livros, 60))