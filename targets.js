//#30 - Targets, Bubbling, Propagation and Capture

const buttons = document.querySelectorAll('button.buy');

const handleBuyButtonClick = (event) => {
  const button = event.target;
  buttonText = `Bought for ${event.target.dataset.price},-Kc`;
  button.textContent = buttonText;
};

buttons.forEach((button) => {
  button.addEventListener('click', handleBuyButtonClick);
});
