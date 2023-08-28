import './_vendor';
// import './_functions';
// import './_components';

const fixedButton = document.querySelector('.fixed-button');
const headerBlock = document.querySelector('.header-fixed');
const header = document.querySelector('.header');

var lastScroll = 0;
var isScrolled = false;
window.addEventListener("scroll", function () {
    window.pageYOffset > (headerBlock.scrollTop + headerBlock.clientHeight) ? headerBlock.classList.add('header-fixed--sticky') : headerBlock.classList.remove('header-fixed--sticky');


  var topHeader = document.querySelector(".header-fixed");
  var currentScroll =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  var scrollDirection = currentScroll < lastScroll;
  var shouldToggle = isScrolled && scrollDirection;
  isScrolled = currentScroll > 100;
  topHeader.classList.toggle("header-fixed--active", shouldToggle);
  lastScroll = currentScroll;
});


const showButton = () => {
  window.addEventListener('scroll', () => {
      window.pageYOffset > (header.scrollTop + (header.clientHeight / 2)) ? fixedButton.classList.add('fixed-button--active') : fixedButton.classList.remove('fixed-button--active');
  })
}

showButton();







