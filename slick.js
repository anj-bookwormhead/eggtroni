$(function () {
    
    $('.responsive').slick({
    centerMode: true,
    centerPadding: '50px',
        slidesToShow: 3,
        arrows: true,
    dots:true,
    responsive: [
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        }
        }
    ]
    });

});