import { iniciarLoja } from "./components/iniciarLoja.js";

$(document).ready(function(){
    $('.carrossel').slick({
        autoplay: true,
        adaptiveHeight: true,
        arrows: false
    });
});

iniciarLoja()



