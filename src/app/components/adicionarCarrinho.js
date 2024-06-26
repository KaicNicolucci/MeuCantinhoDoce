import { Produto } from "../modules/produto.js";
import { carrinhoView } from "../modules/carrinho-view.js";


let carrinho = [];

export function adicionarCarrinho(id, nome, valor, img) {

    const produto  = new Produto(img, nome, valor, id);

    carrinho.push(produto);

    carrinhoView(carrinho);
    setTimeout(popUp(), 2000)

}

function popUp() {

    const modal = document.getElementById('modal');
    modal.style.display = 'block';

    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function(){
        modal.style.display = 'none';})

}