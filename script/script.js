let init = false;
let slider = document.querySelector('.brand-slider');
let sliderWrapper = document.querySelector('.brand-slider__wrapper');
let slide = document.querySelector('.brand-slider__slide');
let showMore = document.querySelector('.brand-slider__show-more-button');
let showMoreBox = document.querySelector('.brand-slider__show-more');

showMore.addEventListener('click', function () {
   slider.classList.toggle('brand-slider-full');
   showMore.classList.toggle('_show');
   if (showMore.textContent === 'Скрыть') {
      showMore.textContent = 'Показать все';
   } else showMore.textContent = 'Скрыть';
});

function newSlide() {
   if (window.innerWidth >= 1120) {
      let cloneSlide = slide.cloneNode(true);
      let newSlide = sliderWrapper.appendChild(cloneSlide);
      newSlide.classList.remove('swiper-slide');
   }
}

let newSlide1 = newSlide();
let newSlide2 = newSlide();

function swiperCard() {
   if (window.innerWidth <= 768) {
      if (!init) {
         init = true;
         swiper = new Swiper(".brand-slider", {
            spaceBetween: 16,
            loop: true,
            slidesPerView: 'auto',
            pagination: {
               el: ".swiper-pagination",
               clickable: true,
            },
         });
      }
   } else if (init) {
      swiper.destroy();
      init = false;
   }
}
swiperCard();
window.addEventListener("resize", swiperCard);