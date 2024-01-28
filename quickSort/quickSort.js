const livros = require('./lista')

function posicionaPivo(array, pivo) {
    let menores = 0;
    array.forEach(element => {
        if (element.preco < pivo.preco) menores++;
    });

    return trocaPosicao(array, array.indexOf(pivo), menores);

}

function trocaPosicao(array, posicaoInicial, posicaoFinal) {
    const elem1 = array[posicaoInicial];
    const elem2 = array[posicaoFinal];

    array[posicaoFinal] = elem1;
    array[posicaoInicial] = elem2;

    return array;
}

function divideNoPivo(array) {
    let pivo = array[Math.floor(array.length / 2)];
    console.log(pivo)

    posicionaPivo(array, pivo)

    let valoresMenores = 0

    for (let analisando = 0; analisando < array.length; analisando++) {
        let atual = array[analisando]
        if (atual.preco <= pivo.preco && atual !== pivo) {
            trocaPosicao(array, analisando, valoresMenores);
            valoresMenores++;
        }
    }

    return array
}

function quickSort(array, esquerda, direita) {

    if (array.length <= 1) {
        return array;
    } else {
        let indiceAtual = particiona(array, esquerda, direita)
        if (esquerda < indiceAtual - 1) {
            quickSort(array, esquerda, indiceAtual - 1)
        }
        if (indiceAtual < direita) {
            quickSort(array, indiceAtual, direita)
        }
    }

    return array
}


function particiona(array, esquerda, direita) {
    let pivo = array[Math.floor((esquerda + direita) / 2)]
    let atualEsquerda = esquerda;
    let atualDireita = direita;

    while (atualEsquerda <= atualDireita) {

        while (array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++;

        }
        while (array[atualDireita].preco > pivo.preco) {
            atualDireita--;

        }

        if (atualEsquerda <= atualDireita) {
            trocaPosicao(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }

    
    return atualEsquerda;
}


console.log('Lista antes da ordenação: ', livros);

console.log('Lista ordenada por preço: ',
    quickSort(livros, 0, livros.length - 1))