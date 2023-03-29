// #28 CARDIO
const ul = `
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
`;

const myHTML = `
  <div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;

const wrapperElm = document.createElement('div');
wrapperElm.innerHTML = ul;
wrapperElm.classList.add('wrapper');
document.body.appendChild(wrapperElm);

const imgElm = document.createElement('img');
imgElm.src = 'https://picsum.photos/500';
imgElm.alt = 'cute puppy';
imgElm.width = 250;
imgElm.height = 250; //if you give it a width and height attribute, it will maintain it's spot while it loads the image
imgElm.classList.add('cute');
wrapperElm.append(imgElm);

const listElm = document.querySelector('ul');
listElm.insertAdjacentHTML('beforebegin', myHTML);

const myDivElm = document.querySelector('.myDiv');
myDivElm.children[1].classList.add('warning');
myDivElm.firstElementChild.remove();

// cards
const persons = [
  {
    name: 'Hana',
    age: 10,
    height: 150,
  },
  {
    name: 'Anna',
    age: 15,
    height: 170,
  },
  {
    name: 'Jana',
    age: 20,
    height: 175,
  },
  {
    name: 'Eva',
    age: 22,
    height: 180,
  },
];

const generatePlayerCard = () => {
  let playcards = ``;
  for (i = 0; i <= 3; i++) {
    playcards =
      playcards +
      `<div class="playerCard">
    <h2>${persons[i].name} — ${persons[i].age}</h2>
    <p>They are ${persons[i].height} and ${
        persons[i].age
      } years old. In Dog years this person would be ${
        persons[i].age * 7
      }. That would be a tall dog!</p>
      <button class="delete" type="button">&times Delete</button>
  </div>
 `;
  }
  return playcards;
};

const cards = document.createElement('div');
cards.classList.add('cards');

cards.insertAdjacentHTML('afterbegin', generatePlayerCard());
wrapperElm.insertAdjacentElement('beforebegin', cards);

const deleteButton = (e) => {
  // e.target.parentElement.remove();
  e.target.closest('.playerCard').remove();
};

const buttonArray = document.querySelectorAll('.delete');
for (i = 0; i <= 3; i++) {
  buttonArray[i].addEventListener('click', deleteButton);
}
