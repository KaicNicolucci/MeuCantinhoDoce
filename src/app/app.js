import { iniciarLoja } from "./components/iniciarLoja.js";

$(document).ready(function(){
    $('.carrossel').slick({
        autoplay: true,
        adaptiveHeight: true,
        arrows: false
    });
    $(".carrinho").click(function(){
        $(".cart").slideToggle(700);
    });
    $(".fechar").click(function(){
        $(".cart").slideUp(700);
    });
});

iniciarLoja()



