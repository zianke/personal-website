$(document).ready(function () {
    $('.navs-div a[href="' + window.location.pathname + '"').css({
        'color': '#ffffff',
        'padding-left': '10px'
    }).prepend('<span style="display: inline-block; transform: scale(2,1)">—&nbsp;</span>');

    $('.navbar-toggle').click(function () {
        $(this).toggleClass('navbar-toggle-cancel');
        $('.full-screen-container').fadeToggle(250);
    });


    /* Scroll guide */
    $('.navs').removeClass('navs-hover');
    $('.navs').hover(function () {
        autoScrolling = false;
        $('html, body').stop().animate({
            scrollTop: $('#' + $(this).html().toLowerCase()).offset().top
        }, 500);
    }, function () {
    });

    var timer;
    var prevScrollTop = $(document).scrollTop();
    $(window).scroll(function () {
        if (!autoScrolling) {
            clearInterval(timer);
            var currentScrollTop = $(document).scrollTop();
            timer = setTimeout(scrollToElement, 100, prevScrollTop, currentScrollTop);
            prevScrollTop = currentScrollTop;
        }
    });

});