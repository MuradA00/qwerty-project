import './_vendor';
// import './_functions';
// import './_components';

const fixedButton = document.querySelector('.fixed-button');
const headerBlock = document.querySelector('.header-dynamic');
const header = document.querySelector('.header');
const contact = document.querySelector('.contact');
const burger = document.querySelector('.header-burger');
const menu = document.querySelector('.navbar');
const body = document.body;

var lastScroll = 0;
var isScrolled = false;

window.addEventListener("scroll", function () {
    window.pageYOffset > (headerBlock.scrollTop + headerBlock.clientHeight) ? headerBlock.classList.add('header-dynamic--sticky') : headerBlock.classList.remove('header-dynamic--sticky');

    var currentScroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    var scrollDirection = currentScroll < lastScroll;
    var shouldToggle = isScrolled && scrollDirection;
    isScrolled = currentScroll > 100;
    headerBlock.classList.toggle("header-dynamic--active", shouldToggle);
    lastScroll = currentScroll;

    console.log(contact.offsetTop)

    window.pageYOffset > (header.offsetTop) ? fixedButton.classList.add('fixed-button--active') : fixedButton.classList.remove('fixed-button--active');
    window.pageYOffset > (contact.offsetTop - contact.clientHeight) ? fixedButton.classList.remove('fixed-button--active') : fixedButton.classList.add('fixed-button--active');
});

const words = ["WEBSITES", "APPS", "DESIGN", "MARKETING", "STRATEGY"];
const outputElement = document.querySelector('.header-output');
let currentWordIndex = 0;
let letterIndex = 0;

function typeNextLetter() {
  const currentWord = words[currentWordIndex];
  if (letterIndex < currentWord.length) {
    const letter = currentWord[letterIndex];
    const letterSpan = document.createElement("span");
    letterSpan.textContent = letter;
    letterSpan.className = "highlight";
    outputElement.appendChild(letterSpan);

    // Trigger reflow to apply styles and animate
    letterSpan.getBoundingClientRect();

    letterSpan.classList.remove("highlight");

    letterIndex++;
    setTimeout(typeNextLetter, 100); // Интервал в миллисекундах между символами
  } else {
    setTimeout(clearWord, 1000); // Ожидание после завершения слова
  }
}

function clearWord() {
  outputElement.textContent = "";
  letterIndex = 0;
  currentWordIndex = (currentWordIndex + 1) % words.length;
  typeNextLetter();
}

typeNextLetter();

if (innerWidth < 1239) {

  const menuHandler = () => {
    burger.classList.toggle('header-burger--active');

    if (burger.classList.contains('header-burger--active')) {
      menu.classList.add('navbar--active');
      body.classList.add('body-locked');
      headerBlock.classList.add('header-dynamic--menu')
    } else {
      menu.classList.remove('navbar--active');
      body.classList.remove('body-locked');
      headerBlock.classList.remove('header-dynamic--menu')
    }
  }

  burger.addEventListener('click', menuHandler)
}

let prevScrollPos = window.pageYOffset;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos && !entry.isIntersecting) {
        entry.target.querySelector('.projects-grid__image-hidden').style.transform = 'translateX(0)';
        entry.target.querySelector('.projects-grid__image-main').style.transform = 'translateX(100%)';
      } else {
        entry.target.querySelector('.projects-grid__image-hidden').style.transform = 'translateX(-100%)';
        entry.target.querySelector('.projects-grid__image-main').style.transform = 'translateX(0)';
      }
      prevScrollPos = currentScrollPos;
  });
}, {
  threshold: 0.5
});

document.querySelectorAll('.projects-grid__item').forEach(item => {
  observer.observe(item);
});
