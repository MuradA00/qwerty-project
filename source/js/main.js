import './_vendor';
import './functions/validate-forms'
import './functions/validate'
import './components/inputMask'

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
  burger.classList.remove('header-burger--active')
}

const hideModal = (modal) => {
  modal.classList.remove('modal--active');
  body.classList.remove('body-locked');
  document.documentElement.style.overflow = '';
  modalToggles.forEach(toggle => toggle.classList.remove('modal-row__toggle--active'));
}

export const submitHandler = () => {
  modalMain.classList.add('modal-fade-out');
  setTimeout(() => {
    modalHidden.classList.add('modal-fade-in')
  }, 500)
}

if (modal) {
  modalToggles.forEach(toggle => {
    const currentCheckbox = toggle.querySelector('.input-checkbox');
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('modal-row__toggle--active')
      if (toggle.classList.contains('modal-row__toggle--active')) {
        currentCheckbox.checked = true;
      } else {
        currentCheckbox.checked = false;
      }
    })
  })
  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      hideModal(modal);
      modalHidden.classList.remove('modal-fade-in')
      modalMain.classList.remove('modal-fade-out')
    })
  })
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      if (trigger.hasAttribute('data-order')) {
        const currentOrder = trigger.getAttribute('data-order');
        const modalOrder = document.querySelector(`.modal-row__toggle[data-order='${currentOrder}']`);
        modalOrder.classList.add('modal-row__toggle--active');
        const currentCheckbox = modalOrder.querySelector('input[type="checkbox"]');
        currentCheckbox.checked = true; // Устанавливаем checked для соответствующего чекбокса
      }
      showModal(modal);
      closeModalByOuterClick(modal);
    });
  });
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
  if (cards.length > 0) {
    cards[0].classList.add('card--active')
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
}

// let lastScrollY = window.scrollX;

// window.addEventListener("scroll", function () {
//     const currentScrollY = window.pageYOffset;

//     if (lastScrollY > currentScrollY && window.pageYOffset > (headerBlock.offsetTop + headerBlock.clientHeight / 2)) {
//       headerBlock.classList.add('header-dynamic--active', 'header-dynamic--sticky');
//     }
//     else {
//       headerBlock.classList.remove('header-dynamic--active', 'header-dynamic--sticky');
//     }
//     lastScrollY = currentScrollY;
// });


function Messenger(el) {
  'use strict';
  var m = this;

  m.init = function() {
    m.codeletters = "&#*+%?£@§$";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = [
      'WEBSITES',
      'APPS',
      'DESIGN',
      'MARKETING',
      'STRATEGY'
    ];

    setTimeout(m.animateIn, 50); // Уменьшили задержку до 50 миллисекунд
  };

  m.generateRandomString = function(length) {
    var random_text = '';
    while (random_text.length < length) {
      random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
    }

    return random_text;
  };

  m.animateIn = function() {
    if (m.current_length < m.messages[m.message].length) {
      m.current_length = m.current_length + 2;
      if (m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }

      var message = m.generateRandomString(m.current_length);
      el.innerHTML = message;

      // Добавляем класс цвета для текущего слова
      el.className = `message color-${m.message + 1}`;

      setTimeout(m.animateIn, 15); // Уменьшили задержку до 10 миллисекунд
    } else {
      setTimeout(m.animateFadeBuffer, 15); // Уменьшили задержку до 10 миллисекунд
    }
  };

  m.animateFadeBuffer = function() {
    if (m.fadeBuffer === false) {
      m.fadeBuffer = [];
      for (var i = 0; i < m.messages[m.message].length; i++) {
        m.fadeBuffer.push({ c: (Math.floor(Math.random() * 12)) + 1, l: m.messages[m.message].charAt(i) });
      }
    }

    var do_cycles = false;
    var message = '';

    for (var i = 0; i < m.fadeBuffer.length; i++) {
      var fader = m.fadeBuffer[i];
      if (fader.c > 0) {
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
      } else {
        message += fader.l;
      }
    }

    el.innerHTML = message;

    if (do_cycles === true) {
      setTimeout(m.animateFadeBuffer, 10); // Уменьшили задержку до 10 миллисекунд
    } else {
      setTimeout(m.cycleText, 2000);
    }
  };

  m.cycleText = function() {
    m.message = m.message + 1;
    if (m.message >= m.messages.length) {
      m.message = 0;
    }

    m.current_length = 0;
    m.fadeBuffer = false;
    el.innerHTML = '';

    // Удаляем класс цвета
    el.className = 'message';

    setTimeout(m.animateIn, 200);
  };

  m.init();
}

console.clear();
var messenger = new Messenger(document.querySelector('.header-output'));


if (innerWidth < 1239) {
  const menuHandler = () => {
    burger.classList.toggle('header-burger--active');
    if (burger.classList.contains('header-burger--active')) {
      menu.classList.add('navbar--active');
      body.classList.add('body-locked');
      if (headerBlock) {
        headerBlock.classList.add('header-dynamic--menu')
      }
      document.documentElement.style.overflow = 'hidden'
    } else {
      menu.classList.remove('navbar--active');
      body.classList.remove('body-locked');
      document.documentElement.style.overflow = ''

      if (headerBlock) {
        headerBlock.classList.remove('header-dynamic--menu')
      }
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

if (window.innerWidth < 767 && missionBlock) {
  shapeObserver.observe(missionBlock);
}

// const missionSectionObserver = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     entry.isIntersecting ? menu.classList.add('navbar--black') : menu.classList.remove('navbar--black');
//   })
// }, {
//   threshold: .75
// })

// missionSectionObserver.observe(document.querySelector('.mission'))

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

if (contact) {
  contactObserver.observe(contact)
}

if (fixedButton) {
  headerObserver.observe(header);
}
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

// try {
//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const currentScrollPos = window.pageYOffset;
//         if (currentScrollPos > prevScrollPos && !entry.isIntersecting) {
//           entry.target.querySelector(hiddenImageClass).style.transform = 'translateX(0)';
//           entry.target.querySelector('.projects-grid__image-main').style.transform = 'translateX(100%)';
//         } else {
//           entry.target.querySelector(hiddenImageClass).style.transform = 'translateX(-100%)';
//           entry.target.querySelector('.projects-grid__image-main').style.transform = 'translateX(0)';
//         }
//         prevScrollPos = currentScrollPos;
//     });
//   }, {
//     threshold: 0.5
//   });

//   document.querySelectorAll('.projects-grid__item').forEach(item => {
//     observer.observe(item);
//   });

// } catch (error) {
//   console.log(error)
// }


