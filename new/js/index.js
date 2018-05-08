var autoScrolling = false;

$(document).ready(function () {
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
        $('.contact-content').fadeOut(400).promise().done(function(){
            $('#contact-content-' + id).fadeIn(400);
        });
    });
});
