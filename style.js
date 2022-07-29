$(document).ready(function(){
    $('.webinar-list-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,        
        speed: 1005,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,    
      prevArrow: '<button class="slide-arrow prev-arrow">Prev</button>',
      nextArrow: '<button class="slide-arrow next-arrow">Next</button>',
      responsive: [        
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },        
      ]    
    });
  });