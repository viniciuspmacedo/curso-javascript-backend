const livros = require('./listaLivros');
const troca = require('./trocaPosicao')

function insertionSort(lista){

    for (let atual = 1; atual < lista.length; atual++) {
        
        let controle = atual;

        while(lista[controle].titulo < lista[controle - 1].titulo){

            troca(lista, controle, controle - 1);

            controle --;
            if(controle === 0) break;
        }
        
    };

    console.log(livros);
}

insertionSort(livros);
