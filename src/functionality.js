const form = document.querySelector('.Add-form');

const displayItem = (score) => {
  const listPa = document.querySelector('.ulEl');
  const listEl = document.createElement('li');
  listEl.textContent = `${score.user}:${score.score}
      `;
  listPa.appendChild(listEl);
};
async function getResponse(scoreInfo) {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nOWB0WyD6z5bEYJ0J5QV/scores/',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(scoreInfo),
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}
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
  async function getData() {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nOWB0WyD6z5bEYJ0J5QV/scores/'
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    data.result.forEach((score) => {
      displayItem(score);
    });
  }
  getData();
});
