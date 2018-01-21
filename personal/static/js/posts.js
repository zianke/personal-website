"use strict";


jQuery(document).ready(function ($) {
    $('.post-abstract a').hover(function () {
        $(this).parents('.post-abstract').find('a').css('text-decoration', 'underline');
        $(this).parents('.post-abstract').find('p').css('text-decoration', 'underline');
    }, function () {
        $(this).parents('.post-abstract').find('a').css('text-decoration', 'none');
        $(this).parents('.post-abstract').find('p').css('text-decoration', 'none');
    });

    $('.post-cover').hover(function () {
        $(this).parents('.post-abstract').find('a').css('text-decoration', 'underline');
        $(this).parents('.post-abstract').find('p').css('text-decoration', 'underline');
    }, function () {
        $(this).parents('.post-abstract').find('a').css('text-decoration', 'none');
        $(this).parents('.post-abstract').find('p').css('text-decoration', 'none');
    });
});
