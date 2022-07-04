const inputRangeEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputRangeEl.addEventListener("input", onChangeFontSize);

function onChangeFontSize() {
  spanEl.style.fontSize = inputRangeEl.value + "px";
}
