const swiper = new Swiper('.swiper', {

    slidesPerView: 3,
    spaceBetween: 20,
    speed: 200,

  
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prew',
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },

    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 40,
      },

      500: {
        slidesPerView: 2,
        
      },

      800: {
        slidesPerView: 3,
      },

    }
    
    

});



