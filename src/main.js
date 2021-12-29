import Player from './js/Player.js';
import createPlayer from './js/createPlayer.js';
import createElement from './js/createElement.js';
import getRandom from './js/getRandom.js';

import obj from './assets/db.js';
const {fighters}=obj
const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');
 
const player1 = new Player(fighters[0]);
const player2 = new Player(fighters[1]);

player1.attack();
player2.attack();

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
  if (player2.hp > 0) {
    arenas.appendChild(showResultText(player2.name));
  }
  if (player1.hp >0) {
    arenas.appendChild(showResultText(player1.name));
  }
  if (player1.hp === 0 && player2.hp === 0) {
    arenas.appendChild(showResultText());
  }
}

function createReloadButton() {
  const reloadButton = createElement('button', 'button','Restart');
  const reloadWrap = createElement('div', 'reloadWrap',[reloadButton]);
  reloadButton.addEventListener('click', function() {
    window.location.reload();
  });
  return reloadWrap;
}

randomButton.addEventListener('click', () => {
  console.log('####: Click Random Button');

  player1.changeHP(getRandom(20));
  player1.renderHP();
  player2.changeHP(getRandom(20));
  player2.renderHP();

  if (player1.hp === 0 || player2.hp === 0){
    randomButton.disabled = true;
    gameOver();
    arenas.appendChild(createReloadButton());
  }

});


arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));
