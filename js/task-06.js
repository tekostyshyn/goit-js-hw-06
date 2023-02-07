const inputEl = document.querySelector("#validation-input");

const onBlurValidation = (event) => {
  let currentLength = event.currentTarget.value.trim().length;
  const requiredLength = Number(inputEl.dataset.length);
  currentLength === requiredLength ?
  inputEl.className = "valid" :
  inputEl.className = "invalid"
};

inputEl.addEventListener("blur", onBlurValidation);
