const inputEl = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

const onInputChange = (event) => {
  nameLabel.textContent = event.currentTarget.value;

  if (event.currentTarget.value.trim().length === 0) nameLabel.textContent = "Anonymous";
};

inputEl.addEventListener("input", onInputChange);
