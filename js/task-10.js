function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input');

const divCollection = document.querySelector('#boxes');

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = input.value;

  const width = 30;
  const height = 30;
  let addValue = 0;

  const elements = [];

  for (let i = 0; i < amount; i += 1){
    const divEl = document.createElement('div');
    divEl.classList.add('box');
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = width + addValue + 'px';
    divEl.style.height = height + addValue + 'px';
    addValue += 10;
    divEl.style.margin = 10 + 'px';

    elements.push(divEl);
  }

  divCollection.append(...elements);
};


function destroyBoxes() {
  divCollection.innerHTML = "";
}