import _vars from "../_vars";

const {passForm} = _vars;

passForm.map((item)=> {

  const input = item.querySelector('.password-form__input');
  const showBtn = item.querySelector('.password-form__show');

  showBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(input.getAttribute('type') == 'password') {
      this.classList.add('view');
		  input.setAttribute('type', 'text');
    } else {
      this.classList.remove('view');
		  input.setAttribute('type', 'password');
    }
  })
})

