import { even, addMultiListener } from '../functions/customFunctions'
import vars from '../_vars';

const { accFaqBlock, accItem, accList } = vars;

let flag = false;
const newList = document.createElement('ul');

function setDoubleCollumn(replaceItems, itemsParrent, mainParrent, newBlock, breakpoint) {
  let containerWidth = document.documentElement.clientWidth;

  if (!flag) {
    mainParrent.appendChild(newBlock);
    flag = true
  }

  replaceItems.map((item, index) => {
    if (!even(index)) {
      if (containerWidth <= `${breakpoint}`) {
        itemsParrent.insertAdjacentElement('beforeend', replaceItems[index]);
        newBlock.remove();
        flag = false;
      }
      if (containerWidth > `${breakpoint}`) {
        newBlock.classList.add('accordion', 'faq-section__list', 'accordion--clone');
        newBlock.insertAdjacentElement('beforeend', replaceItems[index]);
      }
    }
  });
}

if (accFaqBlock) {
  addMultiListener(window, 'resize DOMContentLoaded', () => {
    setDoubleCollumn(accItem, accList, accFaqBlock, newList, 767);
  });
}


