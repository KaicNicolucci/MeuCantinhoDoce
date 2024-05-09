export class Produto{

    constructor(img, nome, valor, id){

        this.img = img
        this.nome = nome
        this.valor = valor
        this.id = id
        this.quantidade = 1

    }

    qtdMais(){
        this.quantidade += 1; 
    }
    
    qtdMenos(){
        if (this.quantidade > 1) {
            this.quantidade -= 1;
        }
    }

    calcularTotal(){
        return this.quantidade * this.valor
    }

}