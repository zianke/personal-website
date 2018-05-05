$(window).on('load', function () { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow': 'visible'});
});

$(document).ready(function () {
    $('.navs-div a[href="' + window.location.pathname + '"').addClass('navs-active')
        .prepend('<span style="display: inline-block; transform: scale(2,1)">—&nbsp;</span>');

    $('.navbar-toggle').click(function () {
        $(this).toggleClass('navbar-toggle-cancel');
        $('.full-screen-container').fadeToggle(250);
    });
});