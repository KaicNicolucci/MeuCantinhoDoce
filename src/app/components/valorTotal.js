import { valorTotalView } from "../modules/valorTotalView.js";



export function valorTotal(Array){

    const valores = [];

    Array.forEach((key, i) => {

        valores.splice(i, i, key.calcularTotal())

    });

    valorTotalView(valores)

}
