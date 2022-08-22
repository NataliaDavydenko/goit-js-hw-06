const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

let outputValue = "";

inputEl.addEventListener("input", changeName);

function changeName() {
  outputValue = inputEl.value;
  outputEl.textContent = outputValue;

  if (outputValue === "") {
    outputEl.textContent = "Anonymous";
  }
}
