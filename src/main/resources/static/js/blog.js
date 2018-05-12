// $(window).on('load', function () {
//     if (window.innerWidth > 768) {
//         $('.list-div').animate({'left': '10rem'}, 800);
//     }
// });

$(document).ready(function () {
    $('.article-div').css('left', $('.list-div').width() + (window.innerWidth > 768 ? 200 : 0));
});