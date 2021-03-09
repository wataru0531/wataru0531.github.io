class HeroSlider{
    constructor(el){
      this.el = el;
      this.swiper = this._initSwiper();
    }

    _initSwiper(){
      return new Swiper(this.el, {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        grabCursor: true,
        effect: 'slides',
        centeredSlides: true,
        spaceBetween: 56,
        slidesPerView: 1,
        breakpoints: {
          500: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          }
        },
        
        speed: 300,
      });
    }

    start(options = {}){
      options = Object.assign({
        delay: 5000,
        disableOnInteraction: false //falseにすることでマウスで動かしたあとでも動くようになる。
      }, options);
      this.swiper.params.autoplay = options;
      this.swiper.autoplay.start();
    }
  
    stop(){
      this.swiper.autoplay.stop();
    }
  }