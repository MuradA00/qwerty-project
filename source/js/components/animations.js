import { removeClassInArray, addCustomClass, removeCustomClass } from '../functions/customFunctions'
import vars from '../_vars';

const {overlay, hiddenList,heroImage,counter} = vars;

window.onload = function () {

  hiddenList ? removeCustomClass(hiddenList, 'none') : '';
  overlay ? removeCustomClass(overlay, 'none') : '';
  heroImage ? removeCustomClass(heroImage, 'none-animate') : '';

  let limit = 0;

  for (let i = 0; i < counter.length; i++) {
    setTimeout(function () {
      let x = 0;
      limit++;
      let int = setInterval(function () {
        x = x + Math.ceil(counter[i].dataset.to / 45);
        counter[i].innerText = x;
        if (x > counter[i].dataset.to) {
          counter[i].innerText = counter[i].dataset.to;
          clearInterval(int);
        }
      }, 22.5);
    }, 1850)


  }
}

