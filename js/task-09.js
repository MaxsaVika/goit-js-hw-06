const buttonEl = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanValueColor = document.querySelector(".color");

buttonEl.addEventListener("click", onChangeColor);

function onChangeColor() {
  const choosenColor = getRandomHexColor();
  body.style.backgroundColor = choosenColor;
  spanValueColor.textContent = choosenColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
