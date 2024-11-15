// swiper element
const swiperEl = document.querySelector('swiper-container');

// swiper parameters
const swiperParams = {
    slidesPerView: 1,
    breakpoints: {
        767: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        }
    },

};

// now we need to assign all parameters to Swiper element
Object.assign(swiperEl, swiperParams);

// and now initialize it
swiperEl.initialize();
