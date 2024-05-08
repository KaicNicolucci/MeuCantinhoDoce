export function verCarrinho(){
    
    const cart = document.querySelector('.cart')

    if (cart.classList.contains('none')) {
        cart.classList.remove('none')
        console.log(cart.classList);
    }

}