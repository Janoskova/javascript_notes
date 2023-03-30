//#29  Event Listener
const buttonElm = document.createElement('button');
buttonElm.textContent = 'Say hello!';
document.querySelector('.container').appendChild(buttonElm);
const paragraphElm = document.createElement('p');
document.querySelector('.container').appendChild(paragraphElm);

const sayHello = () => {
  paragraphElm.textContent += 'Hello! ';
};

buttonElm.addEventListener('click', sayHello);

const removeHandler = () => {
  buttonElm.removeEventListener('click', sayHello);
};

const showBought = (button) => {
  button.addEventListener('click', () => console.log('bought!'));
};

const buttonsElm = document.querySelectorAll('button.buy');
buttonsElm.forEach(showBought);
