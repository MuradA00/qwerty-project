import './_vendor';
// import './_functions';
// import './_components';

const fixedButton = document.querySelector('.fixed-button');
const headerBlock = document.querySelector('.header-dynamic');
const header = document.querySelector('.header');

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

    window.pageYOffset > (header.scrollTop + (header.clientHeight / 2)) ? fixedButton.classList.add('fixed-button--active') : fixedButton.classList.remove('fixed-button--active');
});


showButton();

const words = ["WEBSITES", "APPS", "DESIGN", "MARKETING", "STRATEGY"];
const outputElement = document.getElementById("output");
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

typeNextLetter(); // Начинаем эффект при загрузке страницы

// document.addEventListener('DOMContentLoaded', function() {
//   // Это применяет цвет фона к вашим элементам с фоном вместо использования CSS.
//   let bgs = document.querySelectorAll('section');
//   bgs.forEach(function(el, index) {
//     let isEven = index % 2 === 0;
//     if (isEven) {
//       el.classList.add('black');
//     } else {
//       el.classList.add('white');
//     }
//   });

//   window.addEventListener('scroll', function() {
//     let texts = document.querySelectorAll('.navbar-list__link');
//     let bgs = document.querySelectorAll('section');

//     texts.forEach(function(span) {
//       let spanOffset = span.getBoundingClientRect().top;

//       bgs.forEach(function(bg) {
//         let offset = bg.getBoundingClientRect().top;
//         if (offset >= spanOffset && offset <= spanOffset + bg.offsetHeight) {
//           let isBlack = bg.classList.contains('black');
//           let color = isBlack ? 'black' : 'white';
//           span.style.color = color;
//         }
//       });
//     });
//   });
// });
