const {editoraUm, editoraDois} = require ('./listaLivros');

function juntaListas(lista1, lista2) {
    let listaFinal = [];
    let atualLista1 = 0;
    let atualLista2 = 0;

    while (atualLista1 < lista1.length && atualLista2 < lista2.length) {
        let itemAtualLista1 = lista1[atualLista1];
        let itemAtualLista2 = lista2[atualLista2];

        if(itemAtualLista1.preco < itemAtualLista2.preco){
            listaFinal.push(itemAtualLista1);
            atualLista1++;
        }else {
            listaFinal.push(itemAtualLista2);
            atualLista2++;
        }

    }

    while(atualLista1 < lista1.length){
        listaFinal.push(lista1[atualLista1]);
        atualLista1 ++;
    }

    while(atualLista2 < lista2.length){
        listaFinal.push(lista2[atualLista2]);
        atualLista2 ++;
    }

    return listaFinal;
}

console.log(juntaListas(editoraDois, editoraUm));
