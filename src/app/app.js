import { iniciarLoja } from "./components/iniciarLoja.js";

$(document).ready(function(){
    $('.carrossel').slick({
        autoplay: true,
        adaptiveHeight: true,
        arrows: false
    });
    $(".carrinho").click(function(){
        $(this).animate({left: '-200px'}, 'slow');
    });
});

iniciarLoja()



