const colors = ["color-1", "color-2", "color-3", "color-4"];
let currentColorIndex = 0;

function toggleAnswer(questionElement) {
  const answer = questionElement.querySelector(".answer");

  if (answer.classList.contains("show")) {
    answer.classList.remove("show");
  } else {
    answer.classList.add("show");
  }

  document.body.classList.remove(...colors);
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  document.body.classList.add(colors[currentColorIndex]);
}
