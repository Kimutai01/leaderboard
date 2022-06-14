// eslint-disable-next-line import/no-cycle
import displayItem from './functionality.js';

const getData = async () => {
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
};
export default getData;
