$(document).ready(function() {
    $('select').material_select();
    function heightEL(el) {
        var elH = el;
        var maxHeight = 0;
        for (var i = 0; i < elH.length; ++i) {
            elH[i].style.height = "";
            if (maxHeight < elH[i].clientHeight) {
                maxHeight = elH[i].clientHeight;
            }
        }
        for (var i = 0; i < elH.length; ++i) {
            elH[i].style.height = maxHeight + "px";
        }
    }
    heightEL($('.news-item__info .title-news'));
    heightEL($('.news-item__info .text'));

    $('.js-slider-position').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });
});