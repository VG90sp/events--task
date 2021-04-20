/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
document.addEventListener('DOMContentLoaded', () => {
  const cells = document.getElementsByTagName('td');
  const dead = document.getElementById('dead');
  const lost = document.getElementById('lost');

  let selectedCellIndex = 0;
  let newCellIndex = 0;
  let isClick = false;

  function getCell(cubes) {
    [...cubes].forEach((cube) => {
      cube.addEventListener('click', () => {
        if (cube.classList.contains('cell_has-goblin')) {
          dead.textContent++;
        } else {
          lost.textContent++;
        }

        if (dead.textContent == 10) {
          dead.textContent = 0;
          lost.textContent = 0;
          // eslint-disable-next-line no-alert
          alert('Победа!');
        }
        isClick = true;
      });
    });
  }

  getCell(cells);

  function getRandom(cellsArr) {
    const num = Math.floor(Math.random() * cellsArr.length);
    return num;
  }

  setInterval(() => {
    while (selectedCellIndex === newCellIndex) {
      selectedCellIndex = getRandom(cells);
    }

    if (newCellIndex >= 0) {
      cells[newCellIndex].innerHTML = '';

      if (!isClick) {
        // eslint-disable-next-line no-plusplus
        lost.textContent++;
        // eslint-disable-next-line eqeqeq
        if (lost.textContent == 5) {
          lost.textContent = 0;
          dead.textContent = 0;
          // eslint-disable-next-line no-alert
          alert('Вы проиграли');
        }
      }
      cells[newCellIndex].classList.remove('cell_has-goblin');
    }

    cells[selectedCellIndex].innerHTML = '<img src="https://github.com/netology-code/ahj-homeworks/raw/master/dom/pic/goblin.png">';
    isClick = false;
    cells[selectedCellIndex].classList.add('cell_has-goblin');
    newCellIndex = selectedCellIndex;
  }, 1000);
});
