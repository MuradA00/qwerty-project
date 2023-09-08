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
const cards = document.querySelectorAll('.card');
const shapes = document.querySelectorAll('.figures__item');
const missionBlock = document.querySelector('.mission')
const modal = document.querySelector('.modal');
const modalTriggers = document.querySelectorAll('.modal-trigger');
const modalAccept = document.querySelector('.form-send');
const modalMain = document.querySelector('.modal-content');
const modalHidden = document.querySelector('.modal-result')
const closeModalButtons = document.querySelectorAll('.close-trigger');
const modalToggles = document.querySelectorAll('.modal-row__toggle');

const showModal = (modal) => {
  modal.classList.add('modal--active');
  body.classList.add('body-locked');
  document.documentElement.style.overflow = 'hidden'
  menu.classList.remove('navbar--active');
  body.classList.remove('body-locked');
  headerBlock.classList.remove('header-dynamic--menu')
  document.documentElement.style.overflow = ''
  burger.classList.remove('header-burger--active')
}

const hideModal = (modal) => {
  modal.classList.remove('modal--active');
  body.classList.remove('body-locked');
  document.documentElement.style.overflow = '';
}

if (modal) {
  modalToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('modal-row__toggle--active')
    })
  })
  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      hideModal(modal);
      modalHidden.classList.remove('modal-fade-in')
      modalMain.classList.remove('modal-fade-out')
    })
  })
  modalAccept.addEventListener('click', (e) => {
    e.preventDefault();
    modalMain.classList.add('modal-fade-out');
    setTimeout(() => {
      modalHidden.classList.add('modal-fade-in')
    }, 500)
  })
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      showModal(modal);
      closeModalByOuterClick(modal)
    })
  })
}

const closeModalByOuterClick = (modal) => {
  const modalContainer = modal.querySelector('.modal-container');

  modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
      hideModal(modal);
      modal.classList.remove('modal--active');
      body.classList.remove('body-locked');
      document.documentElement.style.overflow = '';
      modalHidden.classList.remove('modal-fade-in')
      modalMain.classList.remove('modal-fade-out')
    }
  })
}

if (window.innerWidth < 1239) {
  cards.forEach(card => {
    const currentContent = card.querySelector('.card-grid__inner');
    const cardButton = card.querySelector('.card-collapse');

    cardButton.addEventListener('click', function() {
      card.classList.toggle('card--active');

      console.log(currentContent.scrollHeight)

      if (card.classList.contains('card--active')) {
        currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
      }
      else {
        currentContent.style.maxHeight = 0;
      }
    })
  })
}

let lastScrollY = window.scrollX;

window.addEventListener("scroll", function () {
    const currentScrollY = window.pageYOffset;
    // ? headerBlock.classList.add('header-dynamic--sticky') : headerBlock.classList.remove('header-dynamic--sticky');

    if (lastScrollY > currentScrollY && window.pageYOffset > (headerBlock.offsetTop + headerBlock.clientHeight / 2)) {
      headerBlock.classList.add('header-dynamic--active', 'header-dynamic--sticky');
    }
    else {
      headerBlock.classList.remove('header-dynamic--active', 'header-dynamic--sticky');
    }
    lastScrollY = currentScrollY;
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
    letterSpan.style.color = `var(--cl-type-${currentWordIndex + 1})`;

    outputElement.appendChild(letterSpan);

    letterSpan.getBoundingClientRect();

    letterIndex++;
    setTimeout(typeNextLetter, 100);
  } else {
    setTimeout(clearWord, 1000);
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
      document.documentElement.style.overflow = 'hidden'
    } else {
      menu.classList.remove('navbar--active');
      body.classList.remove('body-locked');
      headerBlock.classList.remove('header-dynamic--menu')
      document.documentElement.style.overflow = ''
    }
  }

  burger.addEventListener('click', menuHandler)
}

let currentIndex = 0;

const activateBox = (index) => {
  if (index >= 0 && index < shapes.length) {
    shapes[index].classList.add('figures__item--active');
    setTimeout(() => {
      shapes[index].classList.remove('figures__item--active');
      currentIndex++;
      if (currentIndex < shapes.length) {
        activateBox(currentIndex);
      }
    }, 5000);
  }
}

const shapeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activateBox(currentIndex);
      if (currentIndex === shapes.length) {
        observer.disconnect();
      }
    }
  })
}, {
  threshold: .5
})

if (window.innerWidth < 767) {
  shapeObserver.observe(missionBlock);
}

const headerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    !entry.isIntersecting ? fixedButton.classList.add('fixed-button--active') : fixedButton.classList.remove('fixed-button--active');
  })
}, {
  threshold: 0.5
})

const contactObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.isIntersecting ? fixedButton.classList.remove('fixed-button--active') : fixedButton.classList.add('fixed-button--active');
  })
}, {
  threshold: 0.5
})

contactObserver.observe(contact)

headerObserver.observe(header);

function scrollEvents() {
  const sections = document.querySelectorAll('.section');
  const sectionLinks = document.querySelectorAll('.navbar-list__link');
  const menu = document.querySelector('.navbar-list');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sectionLinks.forEach((link) => {
          const linkOrder = link.getAttribute('href').replace('#', '');
          if (linkOrder == entry.target.id) {
            link.classList.add('navbar-list__link--active')
          } else {
            link.classList.remove('navbar-list__link--active')
          }
        })
      }
    })
  }, {
    threshold: 0.4
  })

  sections.forEach(section => {
    observer.observe(section)
  })

  menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('.navbar-list__link')) {
      e.preventDefault();
      const sectionId = e.target.getAttribute('href').replace('#', '')
      window.scrollTo({
        top: document.getElementById(sectionId).offsetTop,
        smooth: 'smooth'
      })
    }
  })
}

scrollEvents();

document.querySelectorAll('.navbar-list__link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.navbar').classList.remove('navbar--active');
    body.classList.remove('body-locked');
    burger.classList.remove('header-burger--active')
    headerBlock.classList.remove('header-dynamic--menu')
    document.documentElement.style.overflow = ''
  })
})

let prevScrollPos = window.pageYOffset;
const hiddenImageClass = '.projects-grid__image-hidden';

try {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const currentScrollPos = window.pageYOffset;
        if (currentScrollPos > prevScrollPos && !entry.isIntersecting) {
          entry.target.querySelector(hiddenImageClass).style.transform = 'translateX(0)';
          entry.target.querySelector('.projects-grid__image-main').style.transform = 'translateX(100%)';
        } else {
          entry.target.querySelector(hiddenImageClass).style.transform = 'translateX(-100%)';
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

} catch (error) {
  console.log(error)
}
