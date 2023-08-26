import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";
import vars from "../_vars";

import {
  addCustomClass,
  toggleCustomClass,
  removeCustomClass,
  removeClassInArray,
} from "../functions/customFunctions";
const {
  overlay,
  burger,
  mobileMenu,
  mainLinks,
  mobileBurger,
  bodyEl,
  triggerSocial,
  closeSocial,
  headerSocial
 } = vars;

const mobileMenuHandler = function (overlay, mobileMenu, burger) {
  burger.addEventListener("click", function () {
    toggleCustomClass(burger, "active");
    toggleCustomClass(mobileMenu, "active");
    toggleCustomClass(overlay, "active");

    if (!bodyEl.classList.contains("dis-scroll")) {
      disableScroll();
    } else {
      enableScroll();
    }
  });
};

const hideMenuHandler = function (overlay, mobileMenu, burger) {
  removeCustomClass(mobileMenu, "active");
  removeCustomClass(burger, "active");
  removeCustomClass(overlay, "active");
  enableScroll();
};

if (burger) {
  mainLinks.map(function (item) {
    item.addEventListener("click", function () {
      hideMenuHandler(overlay, mobileMenu, burger);
      hideMenuHandler(overlay, mobileMenu, mobileBurger);
    });
  });
}

// if (overlay) {
//   mobileMenuHandler(overlay, mobileMenu, burger);
//   mobileMenuHandler(overlay, mobileMenu, mobileBurger);
//   overlay.addEventListener("click", function (e) {
//     if (e.target.classList.contains("overlay")) {
//       hideMenuHandler(overlay, mobileMenu, burger);
//     }
//   });
// }


if(triggerSocial && closeSocial) {
  triggerSocial.addEventListener('click', (e) => {
    e.preventDefault();
    toggleCustomClass(headerSocial, 'active');
    toggleCustomClass(triggerSocial, 'active');
  });

  closeSocial.addEventListener('click', (e) =>{
    e.preventDefault();
    removeCustomClass(headerSocial, 'active');
    removeCustomClass(triggerSocial, 'active');
  })
}
