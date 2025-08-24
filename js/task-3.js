const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
  const trimmedValue = event.currentTarget.value.trim();

  if (trimmedValue) {
    outputName.textContent = trimmedValue;
  } else {
    outputName.textContent = "Anonymous";
  }
});
