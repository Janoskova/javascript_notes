//#30 - Targets, Bubbling, Propagation and Capture

const buttons = document.querySelectorAll('button.buy');

const handleBuyButtonClick = (event) => {
  const button = event.target;
  buttonText = `Bought for ${event.target.dataset.price},-Kc`;
  button.textContent = buttonText;
  console.log('you clicked the button');
  // event.stopPropagation(); //the function to which window listens will not be triggered
};

buttons.forEach((button) => {
  button.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  function (event) {
    console.log('you clicked the window');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
  },
  { capture: true },
);

document.querySelector('.round').addEventListener('mouseenter', function (e) {
  console.log('A mouse is here!');
  console.count(e.currentTarget);
  console.log(this); //we cannot use THIS with arrow functions
});
