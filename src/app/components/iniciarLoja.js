import { adicionarCarrinho } from "./adicionarCarrinho.js";

const url = './src/app/components/products.json';

export function iniciarLoja(){

    const dados = fetch(url).then(response => response.json()).then(data => {

        const produtosList = document.querySelector('.products');
        
    
        data.forEach((key)=>{

            const produtoCard = document.createElement('div');
            produtoCard.className = 'produto-card';

            const produtoNome = document.createElement('p');
            produtoNome.className = "produto-nome";
            const produtoValor = document.createElement('p');
            produtoValor.className = 'produto-valor';
            const produtoImg = document.createElement('img');
            const buttonId = document.createElement('button');
            buttonId.className = 'button-id';

            buttonId.textContent = "Comprar";
            produtoNome.textContent = key.nome;
            produtoValor.textContent = ` R$${key.valor}`;
            produtoImg.src = key.img;
            buttonId.addEventListener('click', function(){
                adicionarCarrinho(key.id, key.nome, key.valor, key.img)
            });
    
            produtoCard.appendChild(produtoImg);
            produtoCard.appendChild(produtoNome);
            produtoCard.appendChild(produtoValor);
            produtoCard.appendChild(buttonId);
            produtosList.appendChild(produtoCard);
    
        })
});

}
