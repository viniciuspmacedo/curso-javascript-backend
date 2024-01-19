const maisBarato = require('./maisBarato');
const livros = require('./listaLivros')

for (let atual = 0; atual < livros.length; atual++) {
    let menorPreco = maisBarato(livros, atual)

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menorPreco];

    livros[atual] = livroMenorPreco;
    livros[menorPreco] = livroAtual;

}

console.log(livros)