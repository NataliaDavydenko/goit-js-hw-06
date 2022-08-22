const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputValidation);

function onInputValidation(event) {
  const currentInput = event.currentTarget;
  const validationParam = Number(currentInput.dataset.length);

  if (currentInput.value.length === validationParam) {
    currentInput.classList.remove("invalid");
    currentInput.classList.add("valid");
  } else {
    currentInput.classList.remove("valid");
    currentInput.classList.add("invalid");
  }
}
