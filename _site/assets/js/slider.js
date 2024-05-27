jQuery(document).ready(function ($) {
  if ($('.slider1').length > 0) {
    $(".slider1").slick({
      lazyLoad: "ondemand",
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next'),
    });
    document.querySelector('.slick-prev').addEventListener('click', () => {
      $('.slider1').slick('slickPrev');
  
    });
    
    document.querySelector('.slick-next').addEventListener('click', () => {
      $('.slider1').slick('slickNext');
  
    });
  }
});

