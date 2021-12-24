import Player from './js/Player';
import createPlayer from './js/createPlayer';
import createElement from './js/createElement';

import { playerAttack, enemyAttack } from './js/attack';
import generateLogs from './js/generateLogs';

import fighters from './assets/db.json';

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
    generateLogs('end', player2, player1);
  }
  if (player1.hp > 0 && player2.hp < 0) {
    player2.hp = 0;
    arenas.appendChild(showResultText(player1.name));
    generateLogs('end', player1, player2);
  }
  if (player1.hp < 0 && player2.hp < 0) {
    player1.hp = 0;
    player2.hp = 0;
    arenas.appendChild(showResultText());
    generateLogs('draw', player1, player2);
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
  }player1.renderHP();player2.renderHP();
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
generateLogs('start', player1, player2);
