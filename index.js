//HTML from Strings and XSS
const introElm = document.querySelector('.introduction');
myHTML = '<h2>Hello everyone!</h2>';
introElm.innerHTML = myHTML;
console.log(typeof myHTML); // string => console.log(myHTML.classList) => undefined;
const myHTMLElm = document.querySelector('h2');
myHTMLElm.classList.add('coloured');

//document.createRange() and document.createFragment()
// const textXSS = `Cute Pup <img onload="alert('hacked');" src="https://picsum.photos/50"/>`;
const text = 'everyone';
mySecondHTML = `<h2>Hello ${text}!</h2>`;
const fragment = document.createRange().createContextualFragment(mySecondHTML);
introElm.appendChild(fragment);

// CREATING HTML
// create an unordered list with 5 items in it using APPEND, APPENDCHILD, INSERTADJACENTELEMENT, CLONENODE, CREATEELEMENT
const listElm = document.createElement('ul');
const secondListElm = document.createElement('li');
const thirdListElm = document.createElement('li');
const fourthListElm = document.createElement('li');
const fifththListElm = document.createElement('li');
const firstListElm = fifththListElm.cloneNode(true);
firstListElm.textContent = 'First';
secondListElm.textContent = 'Second';
thirdListElm.textContent = 'Third';
fourthListElm.textContent = 'Fourth';
fifththListElm.textContent = 'Fifth';

document.body.appendChild(listElm);
listElm.insertAdjacentElement('afterbegin', thirdListElm);
thirdListElm.insertAdjacentElement('beforebegin', secondListElm);
thirdListElm.insertAdjacentElement('afterend', fourthListElm);
listElm.append(fifththListElm);
listElm.insertAdjacentElement('afterbegin', firstListElm);

// CLASSLIST, DATASET
const pic = document.querySelector('.round');
console.log(pic.classList);

const customElm = document.querySelector('.custom');
console.log(customElm.dataset);

// FOREACH
const multiply = (number, index, arr) => {
  arr[index] = number * 10;
};

const numbers = [66, 44, 12, 4];
numbers.forEach(multiply);
console.log(numbers);
