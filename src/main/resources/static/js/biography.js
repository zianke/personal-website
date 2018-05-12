$(document).ready(function () {
    $('.biography-container').height($('.biography').height());

    $('.progress-bar').each(function () {
        $(this).appear();
        $(this).on('appear', function () {
            $(this).animate({'width': $(this).attr('width') + '%'}, 1500, 'swing');
        });
    });
});
