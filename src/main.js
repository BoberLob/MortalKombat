import Player from './js/Player.js';
import createPlayer from './js/createPlayer.js';
import createElement from './js/createElement.js';

import { playerAttack, enemyAttack } from './js/attack.js';


import obj from './assets/db.js';
const {fighters}=obj
const player1 = new Player(fighters[0]);
const player2 = new Player(fighters[4]);

const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');
const formFight = document.querySelector('.control');


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

formFight.addEventListener('submit', (event) => {
  console.log('####: Click Submit');
  event.preventDefault();

  const enemy = enemyAttack();
  const attack = playerAttack();
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

function createReloadButton() {
  const reloadWrap = createElement('div', 'reloadWrap');
  const reloadButton = createElement('button', 'button');
  reloadButton.innerHTML = 'Restart';
  reloadWrap.appendChild(reloadButton);
  reloadButton.addEventListener('click', function() {
    window.location.reload();
  });
  return reloadWrap;
}

arenas.appendChild(createPlayer(player2));
arenas.appendChild(createPlayer(player1));

