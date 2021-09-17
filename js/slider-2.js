$(document).ready(function(){
  $('.slider-2').slick({
    arrows: false,
    dots: true,
    appendDots: $('.testimonials__slider-dots'),
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    easing: 'ease',
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 5,
    touchMove: true,
    waitForAnimate: true,
    centerMode: true,
    centerPadding: 0,
    variableWidth: false,
    rows: 1,
    slidesPerRow: 1,
    fade: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          autoplay: false,
        }
      }
    ]
  });
});