const inputEl = document.querySelector("#font-size-control");
const textLabel = document.querySelector("#text");

const onInputChange = (event) => (textLabel.style.fontSize = `${event.currentTarget.value}px`);

inputEl.addEventListener("input", onInputChange);
