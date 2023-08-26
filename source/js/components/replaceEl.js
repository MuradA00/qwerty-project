import vars from "../_vars";
import { throttle } from "../functions/throttle";

const {
  footerLabel,
  footer,
  footerColl,
  partnersBoxTitle,
  partnersBoxInner,
  partnersBoxBtnLeft,
  partnersBoxBtnRight,
  tokenBtn,
  tokenDesktop,
  tokenMobile,
} = vars;

const replaceElementsFunction = (
  element,
  parentDesktop,
  parentMobile,
  breakpoint,
  firstRule,
  lastRule
) => {
  let containerWidth = document.documentElement.clientWidth;

  if (element) {
    if (containerWidth <= `${breakpoint}`) {
      parentMobile.insertAdjacentElement(`${firstRule}`, element);
    }
    if (containerWidth > `${breakpoint}`) {
      parentDesktop.insertAdjacentElement(`${lastRule}`, element);
    }
  }
};

window.addEventListener("resize", () => {
  throttle(
    replaceElementsFunction(
      footerLabel,
      footerColl,
      footer,
      576,
      "beforeend",
      "beforeend"
    )
  );
  replaceElementsFunction(
    partnersBoxBtnLeft,
    partnersBoxInner,
    partnersBoxTitle,
    1024,
    "beforeend",
    "beforeend"
  );
  replaceElementsFunction(
    partnersBoxBtnRight,
    partnersBoxInner,
    partnersBoxTitle,
    1024,
    "beforeend",
    "beforeend"
  );
  replaceElementsFunction(
    tokenBtn,
    tokenDesktop,
    tokenMobile,
    576,
    "afterend",
    "beforeend"
  );
});
window.addEventListener("DOMContentLoaded", () => {
  replaceElementsFunction(
    footerLabel,
    footerColl,
    footer,
    576,
    "beforeend",
    "beforeend"
  );
  throttle(
    replaceElementsFunction(
      partnersBoxBtnLeft,
      partnersBoxInner,
      partnersBoxTitle,
      1024,
      "beforeend",
      "beforeend"
    )
  );
  throttle(
    replaceElementsFunction(
      partnersBoxBtnRight,
      partnersBoxInner,
      partnersBoxTitle,
      1024,
      "beforeend",
      "beforeend"
    )
  );
  throttle(
    replaceElementsFunction(
      tokenBtn,
      tokenDesktop,
      tokenMobile,
      576,
      "afterend",
      "beforeend"
    )
  );
});

// 'beforebegin': перед самим элементом targetElement.
// 'afterbegin': внутри элемента targetElement, перед его первым потомком.
// 'beforeend': внутри элемента targetElement, после его последнего потомка.
// 'afterend': после самого элемента targetElement.
