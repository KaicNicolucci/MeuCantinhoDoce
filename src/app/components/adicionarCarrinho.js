import { Produto } from "../modules/produto.js";
import { carrinhoView } from "../modules/carrinho-view.js";

let carrinho = [];

export function adicionarCarrinho(id, nome, valor, img) {

    const produto  = new Produto(img, nome, valor, id);

    carrinho.push(produto);

    console.log(carrinho);

    carrinhoView(carrinho);

}