$(document).ready(function () {

    let item1 = $('.accordion-item').first();
    let item2 = $('.accordion-item').eq(1);
    let item3 = $('.accordion-item').last();
    let paragraphs = $('.accordion-content');
    let title1 = $('.accordion-title').first();
    let title2 = $('.accordion-title').eq(1);
    let title3 = $('.accordion-title').last();


    item1.on('click', function () {
        paragraphs.first().slideToggle(300);
        title1.toggleClass('accordion-title');
    });
    item2.on('click', function () {
        paragraphs.eq(1).slideToggle(300);
        title2.toggleClass('accordion-title');
    });
    item3.on('click', function () {
        paragraphs.last().slideToggle(300);
        title3.toggleClass('accordion-title');
    });

});