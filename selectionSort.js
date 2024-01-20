const maisBarato = require('./maisBarato');
const livros = require('./listaLivros');
const troca = require('./trocaPosicao');

for (let atual = 0; atual < livros.length; atual++) {
    let menorPreco = maisBarato(livros, atual)

    troca(livros, atual, menorPreco)
    
}

console.log(livros)