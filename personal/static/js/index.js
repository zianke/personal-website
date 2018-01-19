"use strict";


jQuery(document).ready(function ($) {
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
});