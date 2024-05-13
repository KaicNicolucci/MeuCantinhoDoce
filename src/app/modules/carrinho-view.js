import { deletarItem } from "../components/deletarItem.js";
import { valorTotal } from "../components/valorTotal.js";

export function carrinhoView(Array){

    const listView = document.querySelector('.inner-produtos')
    listView.innerHTML = '';
    


    Array.map((key, i)=>{

            

        const produto = document.createElement('div');
        produto.className = "carrinho-card";

        const produtoImg = document.createElement('img');
        const produtoNome = document.createElement('p');
        produtoNome.className = 'nome-produto';
        const produtoValor = document.createElement('p');
        produtoValor.className = 'valor-produto'
        const quantidade = document.createElement('p');
        quantidade.className = 'quantidade'
        const btnMais = document.createElement('button');
        btnMais.className = 'btn-mais'
        const btnMenos = document.createElement('button');
        btnMenos.className = 'btn-menos'
        const btnDelete = document.createElement('button');
        btnDelete.className = 'btn-delete'

        produtoImg.src = key.img;
        produtoNome.textContent = key.nome;
        produtoValor.textContent = `Valor Total: R$${key.calcularTotal().toFixed(2)}`;
        quantidade.textContent = key.quantidade;
        btnMais.textContent = '+'
        btnMenos.textContent = '-'
        btnDelete.textContent = 'X'
        btnMais.addEventListener('click', function() {
            key.qtdMais()
            carrinhoView(Array)
        });
        btnMenos.addEventListener('click', function() {
            key.qtdMenos()
            carrinhoView(Array)
        });
        btnDelete.addEventListener('click', function() {
            deletarItem(Array, i)
        })

        produto.appendChild(produtoImg);
        produto.appendChild(produtoNome);
        produto.appendChild(produtoValor);
        produto.appendChild(btnMais);
        produto.appendChild(quantidade);
        produto.appendChild(btnMenos);
        produto.appendChild(btnDelete);
        listView.appendChild(produto);

        
        
    })

    valorTotal(Array)
    
}

