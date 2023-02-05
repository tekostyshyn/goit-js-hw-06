let counterValue = 0;
const counterEl = document.querySelector('#value');

const decrButton = document.querySelector('button[data-action="decrement"]');
const incrButton = document.querySelector('button[data-action="increment"]');

const onClickDecreaseValue = () => {
    counterValue -= 1;
    counterEl.textContent = counterValue};

const onClickIncreaseValue = () => {
    counterValue += 1;
    counterEl.textContent = counterValue};

decrButton.addEventListener('click', onClickDecreaseValue);
incrButton.addEventListener('click', onClickIncreaseValue);
