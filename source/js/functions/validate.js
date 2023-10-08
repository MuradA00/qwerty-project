import { validateForms } from './validate-forms';
import { submitHandler } from '../main';
import vars from '../_vars';

const form = '.form'

const rules1 = [

  {
    ruleSelector: '.input-mail',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Поле должно содержать минимум 3 символа'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите вашу почту!'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректную почту!'
      }
    ]
  },
  // {
  //   ruleSelector: '.input-checkbox'
  // },
  {
    ruleSelector: '.input-message',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Поле должно содержать минимум 3 символа'
      }
    ]
  },
  {
    ruleSelector: '.input-company',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Поле должно содержать минимум 3 символа'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните название вашего заведения!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      },
    ]
  },
  {
    ruleSelector: '.input-user',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Поле должно содержать минимум 3 символа'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните название вашего заведения!'
      }
    ]
  },
];

const afterForm = () => {
  submitHandler();
};

validateForms(form, rules1, afterForm);

document.querySelector('.form-send').addEventListener('click', () => {
  setTimeout(() => {
    document.querySelectorAll('.form-fields__item').forEach(field => {
      const currentPoint = field.querySelector('.form-point');
      const fieldInput = field.querySelector('.form-fields__input');

      if (fieldInput.classList.contains('just-validate-error-field')) {
        currentPoint.style.opacity = 1;
      } else {
        currentPoint.style.opacity = 0;
      }
    });
  }, 100);
});
