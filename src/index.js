const form = document.querySelector(".Add-form");
let scores = JSON.parse(localStorage.getItem("score-list")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameEl = document.querySelector("#name");

  const scoreEl = document.querySelector("#score");
  if (scoreEl.value && nameEl.value) {
    const scoreInfo = {
      name: nameEl.value,
      scor: scoreEl.value,
      index: scores.length + 1,
    };
    scores.push(scoreInfo);
    localStorage.setItem("score-list", JSON.stringify(scores));
    nameEl.value = "";
    scoreEl.value = "";
    showNewItem();
  }
});

const displayItem = (score) => {
  const divEl = document.querySelector(".displaySec");
  const div = document.createElement("div");
  const ulEl = document.createElement("ul");
  ulEl.innerHTML = `
    <li>${score.name}:${score.scor}</li>
    `;
  div.appendChild(ulEl);
  divEl.appendChild(div);
};

const showNewItem = () => {
  scores.forEach((score) => {
    if (score.index >= scores.length) {
      displayItem(score);
    }
  });
};
const showItem = () => {
  scores.forEach((score) => {
    displayItem(score);
  });
};

showItem();
