import { carrinhoView } from "../modules/carrinho-view.js";

export function deletarItem(Array, i) {

    console.log(Array);
    console.log(i);

    Array.splice(i, 1)

    carrinhoView(Array)

}

