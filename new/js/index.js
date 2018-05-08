var autoScrolling = false;

$(document).ready(function () {
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

    /* Home Buttons */
    $('#about').click(function () {
        $('html, body').stop().animate({
            scrollTop: $('#biography').offset().top
        }, 500);
    });

    $('#resume').click(function () {
        window.location.href = "/resume/";
    });

    /* Text Card */
    $('.text-card').hover(function () {
        $(this).find('.more').stop().animate({'opacity': 1, 'margin-top': '3rem'}, 400);
    }, function () {
        $(this).find('.more').stop().animate({'opacity': 0, 'margin-top': '0'}, 400);
    });

    // $('.text-card').each(function () {
    //     if (window.innerHeight > 768) {
    //         $(this).height($(this).find('.verticle-center-child').height());
    //     } else {
    //         $(this).height($(this).find('.verticle-center-child').height() - 40);
    //     }
    // });

    $('#computer-skills').height(Math.max($('#biography').height() * 0.22, $('#computer-skills .verticle-center-child').height() - 40));
    $('#education').height(Math.max($('#biography').height() * 0.16, $('#education .verticle-center-child').height() - 40));
    $('#work-experience').height(Math.max($('#biography').height() * 0.2, $('#work-experience .verticle-center-child').height() - 40));


    /* Image Card */
    $('.img-card-container').hover(function () {
        $(this).find('.img-card').stop().animate({'margin-top': 0}, 400);
    }, function () {
        $(this).find('.img-card').stop().animate({'margin-top': '4rem'}, 400);
    });


    /* Contact */
    $('.contact-icon').click(function () {
        $('.contact-icon').removeClass('contact-icon-active');
        $(this).addClass('contact-icon-active');
        var id = $(this).attr('id').slice('contact-icon-'.length);
        $('.contact-content').fadeOut(400);
        $('#contact-content-' + id).fadeIn(400);
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