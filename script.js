const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value');
const titleEl = document.querySelector('.counter__title');
const counterEl = document.querySelector('.counter');

const handleIncreaseButtonClick = () => {
  //get currrent value
  const currentValue = counterValueEl.textContent;

  //convert value to number
  const currentValueAsNumber = +currentValue;

  let newValue = currentValueAsNumber + 1;

  if (newValue > 5) {
    newValue = 5;

    counterEl.classList.add('counter--limit');

    titleEl.textContent = 'Limit! Buy Pro for > 5.';

    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }

  // set counter element with new value
  counterValueEl.textContent = newValue;
};

const handleDecreaseButtonClick = () => {
  //get currrent value
  const currentValue = counterValueEl.textContent;

  //convert value to number
  const currentValueAsNumber = +currentValue;

  // decrement by 1
  const newValue = currentValueAsNumber - 1 < 0 ? 0 : currentValueAsNumber - 1;

  // set counter element with new value
  counterValueEl.textContent = newValue;
};

const handleResetButtonClick = () => {
  counterValueEl.textContent = 0;
  counterValueEl.classList.add('counter__value--reset');
  titleEl.textContent = 'Counter is reset';
  counterEl.classList.remove('counter--limit');

  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;

  //set timeout
  setTimeout(function () {
    titleEl.textContent = 'FANCY COUNTER';
    counterValueEl.classList.remove('counter__value--reset');
  }, 1000);
};

increaseButtonEl.addEventListener('click', handleIncreaseButtonClick);
document.addEventListener('keydown', handleIncreaseButtonClick);

decreaseButtonEl.addEventListener('click', handleDecreaseButtonClick);
resetButtonEl.addEventListener('click', handleResetButtonClick);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    handleResetButtonClick();
  }
});
