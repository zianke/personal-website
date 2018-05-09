$(document).ready(function () {
    $('.biography-container').height($('.biography').height());

    $(document.body).on('appear', '#appear-test', function() {
        console.log('appear');
    });
});
