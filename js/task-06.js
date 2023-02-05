const inputEl = document.querySelector("#validation-input");

const onBlurValidation = (event) => {
  event.currentTarget.value.trim().length >= inputEl.dataset.length
    ? (inputEl.className = "valid")
    : (inputEl.className = "invalid");
};

inputEl.addEventListener("blur", onBlurValidation);
