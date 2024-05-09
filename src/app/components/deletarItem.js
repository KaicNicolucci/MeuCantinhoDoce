import { carrinhoView } from "../modules/carrinho-view.js";

export function deletarItem(Array, i) {

    const indexMais = i + 1

    console.log(Array, i);

    Array.splice(i, indexMais)

    carrinhoView(Array)

}

