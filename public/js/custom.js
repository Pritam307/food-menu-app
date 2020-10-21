$(document).ready(function(){
    $(".recent-carousel").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll:3,
        centerMode: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
        centerPadding: '140px',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
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
            },
            {
              breakpoint: 300,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
              }
            }
          ]
    });
})