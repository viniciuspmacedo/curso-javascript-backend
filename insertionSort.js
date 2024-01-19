const livros = require('./listaLivros');

function insertionSort(lista){

    for (let atual = 1; atual < lista.length; atual++) {
        
        let controle = atual;

        while(controle > 0 && lista[controle].titulo < lista[controle - 1].titulo){

            [lista[controle], lista[controle-1]] = [lista[controle-1], lista[controle]];

            controle --;
        }
        
    };

    console.log(livros);
}

insertionSort(livros);