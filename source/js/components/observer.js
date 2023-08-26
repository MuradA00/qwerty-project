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
  mainLinks,
  observerSectons
 } = vars;

const observer = new IntersectionObserver((entries) => {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      mainLinks.forEach((link) => {
        let id = link.getAttribute('href').replace('/#', '');
        if (id === entry.target.id) {
          console.log(link)
          addCustomClass(link, 'active');
        } else {
          removeCustomClass(link, 'active');
        }
      });
    }
  });
}, {
  threshold: 0.5
});

observerSectons.forEach(section => { observer.observe(section)} );
