$('.intro').slick({
    dots: true,
    speed: 300,
    arrows: false,
    autoplay: true
})
$('.calendar__sale').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplay: true,
    autoplaySpeed: 4000,
})
$('.soon__slider').slick({
    infinite: true,
    speed: 300,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: false,
    adaptiveHeight: true
})
$('.partners__slider').slick({
    infinite: true,
    speed: 300,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: true,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                centerMode: true
            }
        }
    ]
})
$('.photo__slider').slick({
    dots: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: "unslick"
        }
    ]
});
$('.photo__slider').slick({
    dots: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: "unslick"
        }
    ]
});
$('.musician__slider').slick({
    dots: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                arrows: false
            }
        }
    ]
});
$('.musician__text-slider').slick({
    infinite: true,
    speed: 300,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: false,
    adaptiveHeight: true,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: "unslick"
        }
    ]
})
$(document).mouseup(function (e) {
    var container = $(".calendar__body");
    var container1 = $(".calendar__inner");
    if (container1.has(e.target).length === 0) {
        container.removeClass("calendar__body-show");
    }
});