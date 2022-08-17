$(document).ready(function () {
    let menu = $('.main-menu');
    let link = $('.main-menu-item');
    let button = $('.hamburger');

    button.click(function() {
        menu.toggleClass('opened');
    })

    link.click(function(event) {
        event.preventDefault();
        $('body').fadeOut(2000, function() {
            window.location.href = $(event.target).attr('href');
        });
    })
});