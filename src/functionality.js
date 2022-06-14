import getResponse from './addPost.js';
import getData from './getData.js';

const form = document.querySelector('.Add-form');

const displayItem = (score) => {
  const listPa = document.querySelector('.ulEl');
  const listEl = document.createElement('li');
  listEl.textContent = `${score.user}:${score.score}
      `;
  listPa.appendChild(listEl);
};
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameEl = document.querySelector('#name');

  const scoreEl = document.querySelector('#score');
  if (scoreEl.value && nameEl.value) {
    const scoreInfo = {
      user: nameEl.value,
      score: scoreEl.value,
    };
    nameEl.value = '';
    scoreEl.value = '';
    getResponse(scoreInfo);
  }
});

document.querySelector('.refresh-btn').addEventListener('click', () => {
  document.querySelector('.ulEl').innerHTML = ' ';
  getData();
});

export default displayItem;
