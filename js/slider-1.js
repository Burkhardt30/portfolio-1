$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.dotsss'),
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'ease',
    infinite: true,
    initialSlide: 2,
    autoplay: false,
    autoplaySpeed: 3000,
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
  });
  $('.bttns__control_scroll').click(function(event){
    $('.slider').slick('slickNext');
  });
});