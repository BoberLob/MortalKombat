import { createElement } from '../utils/index.js';
import generateLogs from './generateLogs.js';

const randomButton = document.querySelector('.button');
function showResult(name) {
  const winTitle = createElement('div', 'winTitle');
  if (name) {
    winTitle.innerHTML = `${name} win!`;
  } else {
    winTitle.innerText = 'Nobody wins!';
  }
  createReloadButton()
  return winTitle;
}

function createReloadButton() {
  const reloadButton = createElement('button', 'button', 'Restart');
  const reloadWrap = createElement('div', 'reloadWrap', [reloadButton]);

  reloadButton.addEventListener('click', function() {
    window.location.reload();
  });
  return reloadWrap;
}

export default function gameOver(arenas, player1, player2) {
  if (player1.hp === 0 || player2.hp === 0) {
    randomButton.disabled = true;
    arenas.appendChild(createReloadButton());

    if (player2.hp > 0) {
      arenas.appendChild(showResult(player2.name));
      generateLogs('end', player2, player1);
    }

    if (player1.hp > 0) {
      arenas.appendChild(showResult(player1.name));
      generateLogs('end', player1, player2);
    }

    if (player1.hp === 0 && player2.hp === 0) {
      arenas.appendChild(showResult());
      generateLogs('draw', player1, player2);
    }
  }
}