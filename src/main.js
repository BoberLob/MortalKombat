import Player from './Player.js';
import createPlayer from './js/createPlayer.js';
import createElement from './js/createElement.js';

import { playerAttack, enemyAttack } from './js/attack.js';
import generateLogs from './js/generateLogs.js';

import obj from './assets/db.js';
const {fighters}=obj
const player1 = new Player(fighters[0]);
const player2 = new Player(fighters[4]);

const arenas = document.querySelector('.arenas');
const formFight = document.querySelector('.control');


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

function gameOver() {
  if (player1.hp < 0 && player2.hp > 0) {
    player1.hp = 0;
    arenas.appendChild(showResult(player2.name));
    generateLogs('end', player2, player1);
  }
  if (player1.hp > 0 && player2.hp < 0) {
    player2.hp = 0;
    arenas.appendChild(showResult(player1.name));
    generateLogs('end', player1, player2);
  }
  if (player1.hp < 0 && player2.hp < 0) {
    player1.hp = 0;
    player2.hp = 0;
    arenas.appendChild(showResult());
    generateLogs('draw', player1, player2);
  }
}

formFight.addEventListener('submit', (event) => {
  console.log('####: Click Submit');
  event.preventDefault();

  const enemy = enemyAttack();
  const attack = playerAttack();
  let damagePlayer1 = 0;
  let damagePlayer2 = 0;


  if (enemy.hit === attack.defence) {
    generateLogs('defence', player2, player1, damagePlayer1);
  } else {
    damagePlayer1 = enemy.value;

    player1.changeHP(damagePlayer1);
    player1.renderHP();

    generateLogs('hit', player2, player1, damagePlayer1);
  }
  if (attack.hit === enemy.defence) {
    generateLogs('defence', player1, player2, damagePlayer1);
  } else {
    damagePlayer2 = attack.value;

    player2.changeHP(damagePlayer2);
    player2.renderHP();

    generateLogs('hit', player1, player2, damagePlayer2);
  }
  gameOver();
})

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
