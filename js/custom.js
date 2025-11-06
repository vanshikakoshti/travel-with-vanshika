jQuery("#travel-carousel, #highlighted-events, #yet-another-carousel").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 4
    },

    1366: {
      items: 4
    }
  }
});