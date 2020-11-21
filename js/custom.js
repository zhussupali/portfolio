$(function() {
    $('.slider-img').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
    });
});
function load() {
    $(".slider-area").animate({opacity: '1'}, "slow")
}

