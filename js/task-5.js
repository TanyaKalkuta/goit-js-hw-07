function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColorChanger = document.querySelector("button.change-color");

const bodyTag = document.querySelector("body");
const spanTag = document.querySelector("span.color");

btnColorChanger.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyTag.style.backgroundColor = randomColor;
  bodyTag.style.transition = "background-color 0.5s ease";
  spanTag.textContent = randomColor;
  spanTag.style.color = randomColor;
  spanTag.style.backgroundColor = "#fff";
});
