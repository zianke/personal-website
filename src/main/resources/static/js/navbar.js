$(document).ready(function () {
    $('.navs-div a[href="/' + ($('body').attr('id') === 'index' ? '' : ($('body').attr('id'))) + '"]').css({
        'color': '#ffffff',
        'padding-left': '10px'
    }).prepend('<span style="display: inline-block; transform: scale(2,1)">—&nbsp;</span>');

    $('.navbar-toggle').click(function () {
        $(this).toggleClass('navbar-toggle-cancel');
        $('.full-screen-container').fadeToggle(250);
    });

});