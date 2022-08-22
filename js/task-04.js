const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;

btnDec.addEventListener("click", onIncrement);
btnInc.addEventListener("click", onDecrement);

function onDecrement() {
  counterValue += 1;
  value.textContent = counterValue;
}

function onIncrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}
