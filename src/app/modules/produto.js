export class Produto{

    quantidade = 1

    constructor(img, nome, valor, id){

        this.img = img
        this.nome = nome
        this.valor = valor
        this.id = id

    }

    qtdMais(){
        this.quantidade++
    }
    qtdMenos(){
        this.quantidade--
    }


}