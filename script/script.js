let swiper = null;
const mediaQuery768px = window.matchMedia("(max-width: 768px)");
const mediaQuery1120px = window.matchMedia("(min-width: 1120px)");
const paginationBox = document.querySelector(".swiper-pagination");

const slider = document.querySelector('.brand-slider');
const sliderWrapper = slider.querySelector('.brand-slider__wrapper');
const slide = sliderWrapper.querySelector('.brand-slider__slide');
const showMoreBox = document.querySelector('.brand-slider__show-more');
const showMore = showMoreBox.querySelector('.brand-slider__show-more-button');
const cloneSlide = slide.cloneNode(true);

document.addEventListener('DOMContentLoaded', function () {
   if (mediaQuery768px.matches) {
      swiperInit();
   } else {
      paginationBox.classList.toggle('_off');
   }

   if (mediaQuery1120px.matches) {
      let newSlide = sliderWrapper.appendChild(cloneSlide);
      newSlide.classList.remove('swiper-slide');
   }

   function swiperInit() {
      swiper = new Swiper(".swiper", {
         spaceBetween: 16,
         loop: true,
         slidesPerView: 'auto',
         pagination: {
            el: ".swiper-pagination",
            clickable: true,
         },
      });
   }

   function sliderToggle(isMobileSize) {
      paginationBox.classList.toggle('_off');
      if (isMobileSize && !swiper) {
         swiperInit();
      } else if (!isMobileSize && swiper) {
         swiper.destroy();
         swiper = null;
      }
   }

   function sliderActions() {
      slider.classList.toggle('brand-slider-full');
      showMore.classList.toggle('_show');
      if (showMore.textContent === 'Скрыть') {
         showMore.textContent = 'Показать все';
      } else showMore.textContent = 'Скрыть';
   }

   function newSlide(isFullSize) {
      if (isFullSize) {
         let newSlide = sliderWrapper.appendChild(cloneSlide);
         newSlide.classList.remove('swiper-slide');
      }
      else if (!isFullSize) {
         sliderWrapper.removeChild(sliderWrapper.lastChild);
      }
   }

   showMore.addEventListener('click', sliderActions);

   mediaQuery768px.addEventListener('change', function resizeWidth(event) {
      sliderToggle(event.matches);
   })
   mediaQuery1120px.addEventListener('change', function addNewSlide(event) {
      newSlide(event.matches);
   })
});
