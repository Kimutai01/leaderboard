const form = document.querySelector('.Add-form');
const scores = JSON.parse(localStorage.getItem('score-list')) || [];

const displayItem = (score) => {
  const listPa = document.querySelector('.ulEl');
  const listEl = document.createElement('li');
  listEl.textContent = `${score.name}:${score.scor}
      `;
  listPa.appendChild(listEl);
};
const showNewItem = () => {
  scores.forEach((score) => {
    if (score.index >= scores.length) {
      displayItem(score);
    }
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameEl = document.querySelector('#name');

  const scoreEl = document.querySelector('#score');
  if (scoreEl.value && nameEl.value) {
    const scoreInfo = {
      name: nameEl.value,
      scor: scoreEl.value,
      index: scores.length + 1,
    };
    scores.push(scoreInfo);
    localStorage.setItem('score-list', JSON.stringify(scores));
    nameEl.value = '';
    scoreEl.value = '';
    showNewItem();
  }
});

const showItem = () => {
  scores.forEach((score) => {
    displayItem(score);
  });
};

showItem();
