//#27 Traversing and Removing Nodes
const wes = document.querySelector('.wesBos');

console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.previousElementSibling);
console.log(wes.nextElementSibling);
console.log(wes.parentElement);
console.log(wes.children);

console.log(wes.childNodes);
console.log(wes.parentNode);

//CLOSEST()
console.log(wes.closest('.container'));

//REMOVE()
const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);
p.remove();
console.log(p); //it stays in JS memory

//#26 HTML from Strings and XSS
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

// #25 CREATING HTML
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

// #23 and #24 CLASSLIST, DATASET
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
