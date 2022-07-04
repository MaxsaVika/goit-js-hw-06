const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur() {
  inputEl.value.trim().length === Number(inputEl.dataset.length)
    ? onValidInput()
    : onInvalidInput();
}

function onValidInput() {
  inputEl.className = "valid";
}

function onInvalidInput() {
  inputEl.className = "invalid";
}
