var swiper = new Swiper(".event-swiper", {
    effect: "coverflow",
    loop:true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        991: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });