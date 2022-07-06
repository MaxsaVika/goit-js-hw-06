const inputNum = document.querySelector("input");
const boxes = document.querySelector("#boxes");

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

let amountValue = 0;
inputNum.addEventListener("input", findAmountBoxes);

function findAmountBoxes() {
  amountValue = Number(inputNum.value);
}

createBtn.addEventListener("click", () => createBoxes(amountValue));
destroyBtn.addEventListener("click", resetBoxes);

function createBoxes(amount) {
  resetBoxes();

  const allBoxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = i * 10 + 30 + "px";
    box.style.height = i * 10 + 30 + "px";

    allBoxes.push(box);
  }
  return boxes.append(...allBoxes);
}

function resetBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
