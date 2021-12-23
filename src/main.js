import Player from './js/Player';
import createPlayer from './js/createPlayer';
import createElement from './js/createElement';
import getRandom from './js/getRandom';

import fighters from './assets/db.json';

const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');

const player1 = new Player(fighters[0]);
const player2 = new Player(fighters[4]);

console.log(player1.attack());
console.log(player2.attack());

function showResultText(name) {
  const winTitle = createElement('div', 'winTitle');
  if (name) {
    winTitle.innerHTML = `${name} win!`;
  } else {
    winTitle.innerText = 'Nobody wins!';
  }

  return winTitle;
}

function gameOver() {
  if (player1.hp < 0 && player2.hp > 0) {
    player1.hp = 0;
    arenas.appendChild(showResultText(player2.name));
  }
  if (player1.hp > 0 && player2.hp < 0) {
    player2.hp = 0;
    arenas.appendChild(showResultText(player1.name));
  }
  if (player1.hp < 0 && player2.hp < 0) {
    player1.hp = 0;
    player2.hp = 0;
    arenas.appendChild(showResultText());
  }
}

randomButton.addEventListener('click', () => {
  console.log('####: Click Random Button');

  let player1HP = player1.changeHP(getRandom(20));
  player1.renderHP();
  let player2HP = player2.changeHP(getRandom(20));
  player2.renderHP();

  if (player1HP === 0 || player2HP === 0) {
    randomButton.disabled = true;
    arenas.appendChild(createReloadButton());
    gameOver();
  }
});

function createReloadButton() {
  const reloadWrap = createElement('div', 'reloadWrap');
  const reloadButton = createElement('button', 'button');
  reloadButton.innerHTML = 'Restart';
  reloadWrap.appendChild(reloadButton);
  reloadButton.addEventListener('click', function () {
    window.location.reload();
  });
  return reloadWrap;
}

arenas.appendChild(createPlayer(player2));
arenas.appendChild(createPlayer(player1));
