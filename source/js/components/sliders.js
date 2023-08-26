import Swiper from "../vendor/swiper";
import vars from "../_vars";
import { throttle } from "../functions/throttle";
import { even } from "../functions/customFunctions";

const { mainSlider, programBox, newsInner } = vars;

if (newsInner) {
  const newsSlider = newsInner.querySelector('.swiper-container');
  const newsSliderPrev = newsInner.querySelector('.news-prev');
  const newsSliderNext = newsInner.querySelector('.news-next');

  new Swiper(newsSlider, {
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    spaceBetween: 20,
    observer: true,
    watchOverflow: true,
    observeParents: true,

    navigation: {
      nextEl: newsSliderNext,
      prevEl: newsSliderPrev,
    }
  });
}

new Swiper(mainSlider, {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  observer: true,
  initialSlide: 2,
  watchOverflow: true,
  centeredSlides: true,
  observeParents: true,
  allowTouchMove: false,
  speed: 2000,
  parallax: true,
  autoplay: {
    delay: 2000,
  },
});


const navigationContent = [
  {
    name: 'Bonus 1',
    descr: 'Connect Wallet',
    class:'orange',
    iconSrc: 'img/program-slider/icon.svg'
  },
  {
    name: 'level 1',
    descr: 'Bring your friends',
    class:'purpure',
    iconSrc: 'img/program-slider/icon2.svg'
  },
  {
    name: 'level 2',
    descr: "Get 5% from your friend's referral",
    class:'red',
    iconSrc: 'img/program-slider/icon3.svg'
  },

]

if (programBox) {
  const mySwiper = new Swiper(programBox.querySelector('.program-slider'), {
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    observer: true,
    watchOverflow: true,
    observeParents: true,
    allowTouchMove: true,
    speed: 2500,
    autoplay: {
      delay: 3000,
    },

    pagination: {
      el: '.program-slider__nav',
      clickable: 'true',
      type: 'bullets',
      renderBullet: function (index, className) {
          return `
            <li class="${className}">
              <button class="program-button ${navigationContent[index].class}">
                ${navigationContent[index].name}
                <img class="program-button__icon" src="${navigationContent[index].iconSrc}" alt="icon">
                <span class="program-button__descr">
                  ${navigationContent[index].descr}
                </span>
                <i class="custom-icon custom-icon--nav program-button__stars"></i>
              </button>
            </li>
          `;
        },

    },

  });
}




