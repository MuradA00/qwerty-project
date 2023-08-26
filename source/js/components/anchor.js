// Подключение плавной прокрутки к якорям
// https://github.com/cferdinandi/smooth-scroll
import vars from "../_vars";
const {header} = vars;

import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="/#"]', {
  speed: 1200,
  offset: function (toggle) {
		if (toggle.classList.contains('.main-nav__link')) {
			return header.offsetHeight;
		} else {
			return 50;
		}
	}
});


