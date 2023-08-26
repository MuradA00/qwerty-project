document.querySelectorAll('textarea').forEach(el => {
  el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
  el.classList.add('auto');
  el.addEventListener('input', e => {
    if (el.val != '') {
      el.style.height = 'auto';
      el.style.height = (el.scrollHeight) + 'px';
    }
  });
});
