function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

const createBoxes = (amount) => {
  amount = input.value;
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = 30 + i * 10 + 'px';
    newBox.style.height = 30 + i * 10 + 'px';
    newBox.style.backgroundColor = getRandomHexColor();
    boxes.push(newBox);
  }
  boxesContainer.append(...boxes);
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

