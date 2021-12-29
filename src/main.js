import Player from './js/Player.js';
import createPlayer from './js/createPlayer.js';
import createElement from './js/createElement.js';

import { playerAttack, enemyAttack } from './js/attack.js';


import obj from './assets/db.js';
const {fighters}=obj
const player1 = new Player(fighters[0]);
const player2 = new Player(fighters[1]);

const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');
const formFight = document.querySelector('.control');

function showResultText(name) {
  const winTitle = createElement('div', 'winTitle');

  if (name) {
    winTitle.innerText = `${name} win!`;
  } else {
    winTitle.innerText = 'Nobody wins!';
  }
  return winTitle;
}

function gameOver() {
  if (player2.hp > 0) {
    arenas.appendChild(showResultText(player2.name));
  }
  if (player1.hp > 0) {
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



formFight.addEventListener('submit', (event) => {
  console.log('####: Click Submit');
  event.preventDefault();

  const enemy = enemyAttack();
  const attack = playerAttack(formFight);
  const damagePlayer1=enemy.hit===attack.defence ?0:enemy.value
  const damagePlayer2=attack.hit===enemy.defence ?0:attack.value
  let player1HP = player1.changeHP(damagePlayer1);
  let player2HP = player2.changeHP(damagePlayer2);

  if (player1HP === 0 || player2HP === 0) {
    randomButton.disabled = true;
    arenas.appendChild(createReloadButton());
    gameOver();
  }
  player1.renderHP();
  player2.renderHP();
});

console.log(createPlayer(player1))
arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));



