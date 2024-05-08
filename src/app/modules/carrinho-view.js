export function carrinhoView(Array){

    const listView = document.querySelector('.produtos-view')
    

    Array.forEach((key)=>{

        const produto = document.createElement('div');
        produto.className = "carrinho-card";

        const produtoImg = document.createElement('img');
        const produtoNome = document.createElement('p');
        const produtoValor = document.createElement('p');
        const quantidade = document.createElement('p');
        const btnMais = document.createElement('button');
        const btnMenos = document.createElement('button');

        produtoImg.src = key.img;
        produtoNome.textContent = key.nome;
        produtoValor.textContent = key.valor;
        quantidade.textContent = key.quantidade;
        btnMais.textContent = '+'
        btnMenos.textContent = '-'
        btnMais.addEventListener('click', function() {
            key.qtdMais()
            carrinhoView()
        });
        btnMenos.addEventListener('click', function() {
            key.qtdMenos()
            carrinhoView()
        });

        produto.appendChild(produtoImg);
        produto.appendChild(produtoNome);
        produto.appendChild(produtoValor);
        produto.appendChild(quantidade);
        produto.appendChild(btnMais);
        produto.appendChild(btnMenos);
        listView.appendChild(produto);


    })

    

}

