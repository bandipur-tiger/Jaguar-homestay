
  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);



// Review Count Section

new PureCounter();


// Our Services Courosel javascript 

new Swiper('.testimonials-slider', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

// hero section
$(window).scroll(function () {
  const
    a = $(this).scrollTop(),
    b = 400,
    t = window.pageYOffset;

  $(".parallax").css('transform', 'translate(-' + a / 1.6 + 'px, -' + 1 - a / b + 'px)');

  $(".one").css('bottom', -(t * 0.3) + 'px');
  $(".two").css('bottom', -(t * 0.4) + 'px');
  $(".three").css('bottom', -(t * 0.5) + 'px');
  $(".four").css('bottom', -(t * 0.6) + 'px');
  $(".five").css('bottom', -(t * 0.7) + 'px');
});

$("header").on('mousemove', e => {
  const cx = $(window).width() / 2,
    cy = $(window).height() / 2,
    x = (cx - e.pageX) / cx * 2,
    y = (cy - e.pageY) / cy * 2;
  $(".two").css('transform', `translate(${x}px, ${y}px)`);
  $(".four").css('transform', `translate(-${x}px, ${y}px)`);
  $(".five").css('transform', `translate(${x}px, -${y}px)`);
});
