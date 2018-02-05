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
    heightEL($('.advantages .advantages-item'));

    $('.js-slider-position').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.js-slider-legal').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $('.js-open-comment').on('click', function () {
       $(this).text('').toggleClass('open');
       $(this).parents('.comment').find('.inner-comments').slideToggle();
    });
    function blueHideTitle(el, size) {
        var itemLenght = $(el);
        var textItem = itemLenght.text();
        var lengItem = textItem.length;
        var maxL = size;
        if (textItem.length >= maxL) {
            var text = textItem.slice(0, maxL);
            textItem = text + '..';
            $(itemLenght).text(textItem);
        }
    };
    var hide = $('.legal-position').find('.js-hide');
    hide.each(function (i, e) {
        blueHideTitle($(e), 155);
    });
    var yearBlock = document.querySelector('.yearN'),
        yearNow = new Date().getFullYear().toString();
    if (yearNow.length) {
        yearBlock.innerText = yearNow
    }
});