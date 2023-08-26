import {addCustomClass, toggleCustomClass, removeCustomClass } from "../functions/customFunctions";

const closeSelect = function (selectBody, select , className = "active") {
  selectBody.style.height = 0;
  removeCustomClass(select, className);
};

const openSelect = function (selectBody, select , className = "active") {
  selectBody.style.height = selectBody.scrollHeight + "px";
  addCustomClass(select, className);
};

const checkIsSelectOpen = function (select) {
  return select.classList.contains('active');
}

const select = document.querySelectorAll("[data-select]");
if (select.length) {
  select.forEach((item) => {
    const selectCurrent = item.querySelector(".select__current");
    const selectInut = item.querySelector(".select__input");
    const selectOptions = [...item.querySelectorAll("svg")];
    const selectBody = item.querySelector(".select__body");

    selectOptions.map((option) => {
      option ? option.style.pointerEvents = "none" : '';
    });

    if (selectInut) {
      const currentId = selectCurrent.getAttribute("data-id");
      selectInut.setAttribute("value", currentId);
    }

    item.addEventListener("click", (e) => {
      e.preventDefault();
      const isSelectOpen = checkIsSelectOpen(item);
      const el = e.target.dataset.choice;
      const innerSelect = e.target.innerHTML;
      let items = item.querySelectorAll(`.select__list [data-id]`);
      let currentItem = item.querySelector(`.select__list [data-id='${selectInut.getAttribute("value")}']`)

      if (el === "option") {
        selectCurrent.innerHTML = innerSelect;
        selectInut.setAttribute("value", e.target.getAttribute("data-id"));
        selectCurrent.setAttribute("data-id", e.target.getAttribute("data-id"));
      }

      items.forEach(function (item) {item.style.display = "flex"});
      currentItem.style.display = "none";
      isSelectOpen ? closeSelect(selectBody, item) : openSelect(selectBody, item)
    });


    document.addEventListener("click", function (event) {
      if (!item.contains(event.target)) {
        closeSelect(selectBody, item)
      }
    });
  });
}
