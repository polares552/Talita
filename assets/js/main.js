/**
 * LOAD DOCUMENT
 */
$(window).on('load', function () {
    $(".loaderBG").hide();
});

/**
 * BUTTON TO TOP
 */
$(document).ready(function () {
    var menuHeight = $('header').innerHeight();
    $('.box').hide();
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > menuHeight) {
            $('.box').fadeIn(500);
        } else {
            $('.box').fadeOut(500);
        }
    });

    $('.box').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

});

/**
 * SCROLL SUAVE
 */
$('nav a').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 800);
});

/**
 * ANIMAÇÃO DO SCROLL
 */
//DEBOUNCE PARA SEGURAR AS REQUISICOES DO SCROLL POR UM TEMPO
debounce = function (func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    }
};

(function () {
    var $target = $('.anime'),
        animationClass = 'anime-start',
        offset = $(window).height() * 3 / 4;

    function animeScroll() {
        var documentTop = $(document).scrollTop();

        $target.each(function () {
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            }
        })
    }
    
    /*animeScroll();
    $(document).scroll(debounce(function () {
        animeScroll();
    }, 100));*/

}());

/**
 * CARROUSEL GALERRY
 */
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
});



