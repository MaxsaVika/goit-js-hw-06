let counterValue = 0;

const valueEl = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener("click", onDecrementClick);
incrementBtn.addEventListener("click", onIncrementClick);

function onDecrementClick() {
  counterValue -= 1;
  changeCounterValue();
}

function onIncrementClick() {
  counterValue += 1;
  changeCounterValue();
}

const changeCounterValue = () => {
  valueEl.textContent = counterValue;
};
