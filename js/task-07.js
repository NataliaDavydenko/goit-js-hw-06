const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onFontSizeChange);

function onFontSizeChange(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}
