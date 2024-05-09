export function valorTotalView(Array) {


    const innerValor = document.querySelector('.inner-valor')
    innerValor.innerHTML = '';
    let soma = 0

    for (let index = 0; index < Array.length; index++) {
        soma += Array[index];
    }

    innerValor.innerHTML = `R$${soma.toFixed(2)}`

}