$(document).ready(function(){
      $('.slider').slick({
        prevArrow:'<button type="button" class="slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-next"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              dots: true,
              autoplay: false,
            }
          },
          {
            breakpoint: 600,
            settings: {

            }
          },
          {
            breakpoint: 320,
            settings: {
              dots: true,
              autoplay: true,
              autoplaySpeed: 3000,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    });
