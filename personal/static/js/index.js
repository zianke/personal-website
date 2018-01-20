"use strict";


jQuery(document).ready(function ($) {
    /*---------------------------------------------*
     * Darken and lighten each section
     ---------------------------------------------*/
    var windowHeight = $(window).height(),
        gridMiddle = windowHeight * .5;

    $('.home').each(function () {
        var thisTop = $(this).offset().top - $(window).scrollTop();
        var thisBottom = thisTop + $(this).height();
        if (thisTop <= gridMiddle && thisBottom >= gridMiddle) {
            $(this).stop().fadeTo('slow', 1);
        }
        else {
            $(this).stop().fadeTo('slow', 0.4);
        }
    });

    $(window).on('scroll', function () {
        $('.home').each(function () {
            var thisTop = $(this).offset().top - $(window).scrollTop();
            var thisBottom = thisTop + $(this).height();
            if (thisTop <= gridMiddle && thisBottom >= gridMiddle) {
                $(this).stop().fadeTo('slow', 1);
            }
            else {
                $(this).stop().fadeTo('slow', 0.4);
            }
        });
    });


    /*---------------------------------------------*
     * Underline text when hovering
     ---------------------------------------------*/
    $('.home-content h1 span').hover(function () {
       $(this).parents('.home-text').find('h1 span, p span').css({'text-decoration':'underline','background': 'rgba(0, 0, 0, .5)'});
    },function () {
        $(this).parents('.home-text').find('h1 span, p span').css({'text-decoration':'none','background': 'rgba(0, 0, 0, .3)'});
    });
});