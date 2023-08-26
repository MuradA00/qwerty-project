import vars from '../_vars';

const {parrentBuffer} = vars;

function copyFunction(textInput) {
  textInput.select();
  document.execCommand("copy");
}

parrentBuffer.map(function(item){
  const currentInput =  item.querySelector('.buffer__input');
  const currentButton =  item.querySelector('.buffer__button');
  currentButton.addEventListener('click', () => copyFunction(currentInput))
});


