function trocaPosicao(lista, primeiro, segundo) {
    [lista[primeiro], lista[segundo]] = [lista[segundo], lista[primeiro]];
}

module.exports = trocaPosicao;