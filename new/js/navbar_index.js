$(document).ready(function () {
    $('.navs-div a[href="/' + ($('body').attr('id') === 'index' ? '"' : ($('body').attr('id') + '/"'))).css({
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


/* Scroll helper functions */
function scrollToElement(prevScrollTop, currentScrollTop) {
    $('.navs').removeClass('navs-active');
    var scrollTopId = nextScrollTopId(prevScrollTop, currentScrollTop);
    autoScrolling = true;
    $('html, body').stop().animate({
        scrollTop: $('#' + scrollTopId).offset().top
    }, 500, function () {
        autoScrolling = false;
    });
    $('#' + scrollTopId + '-link').addClass('navs-active');
}

function nextScrollTopId(prevScrollTop, currentScrollTop) {
    var scrollTopIds = ['home', 'biography', 'projects', 'blog', 'contact'];
    var scrollTops = [$('#home').offset().top, $('#biography').offset().top, $('#projects').offset().top, $('#blog').offset().top, $('#contact').offset().top,]
    if (currentScrollTop < prevScrollTop) {
        for (var i = scrollTops.length - 1; i >= 0; i--) {
            if (scrollTops[i] <= currentScrollTop) {
                return scrollTopIds[i];
            }
        }
    } else {
        for (var i = 0; i < scrollTops.length; i++) {
            if (scrollTops[i] >= currentScrollTop) {
                return scrollTopIds[i];
            }
        }
    }
}