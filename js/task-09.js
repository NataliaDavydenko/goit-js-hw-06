function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

btn.addEventListener('click', onColorChange);

function onColorChange() {
  span.textContent = getRandomHexColor();
  document.body.setAttribute('style', 'background-color: ' + span.textContent);
}