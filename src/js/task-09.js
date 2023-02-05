function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorLabelEl = document.querySelector(".color");
const button = document.querySelector(".change-color");

const onClickChangeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorLabelEl.textContent = document.body.style.backgroundColor;
};

button.addEventListener("click", onClickChangeColor);
