import Player from './js/Player.js';
import createPlayer from './js/createPlayer.js';
import createElement from './js/createElement.js';

import { playerAttack, enemyAttack } from './js/attack.js';
import generateLogs from './js/generateLogs.js';
import obj from './assets/db.js';

const {fighters}=obj
const player1 = new Player(fighters[0]);
const player2 = new Player(fighters[1]);

const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');
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

function createReloadButton() {
  const reloadButton = createElement('button', 'button', 'Restart');
  const reloadWrap = createElement('div', 'reloadWrap', [reloadButton]);

  reloadButton.addEventListener('click', function() {
    window.location.reload();
  });
  return reloadWrap;
}

function gameOver() {
  if (player2.hp > 0) {
    arenas.appendChild(showResult(player2.name));
    generateLogs('end', player2, player1);
  }

  if (player1.hp > 0 ) {
    arenas.appendChild(showResult(player1.name));
    generateLogs('end', player1, player2);
  }
  if (player1.hp === 0 && player2.hp === 0) {

    arenas.appendChild(showResult());
    generateLogs('draw', player1, player2);
  }
}

formFight.addEventListener('submit', (event) => {
  console.log('####: Click Submit');
  event.preventDefault();

  const enemy = enemyAttack();
  const attack = playerAttack(formFight);

  console.log(attack)
  console.log(enemy)

  let damagePlayer1 = 0;
  let damagePlayer2 = 0;
  let player1HP =100
  let player2HP =100

  if (enemy.hit === attack.defence) {
    generateLogs('defence', player2, player1, damagePlayer1);
  } else {
    damagePlayer1 = enemy.value;

    player1HP =player1.changeHP(damagePlayer1);
    player1.renderHP();

    generateLogs('hit', player2, player1, damagePlayer1);
  }

  if (attack.hit === enemy.defence) {
    generateLogs('defence', player1, player2, damagePlayer1);
  } else {
    damagePlayer2 = attack.value;

    player2HP =player2.changeHP(damagePlayer2);
    player2.renderHP();

    generateLogs('hit', player1, player2, damagePlayer2);
  }

  if (player1HP === 0 || player2HP === 0) {
    randomButton.disabled = true;
    arenas.appendChild(createReloadButton());
    gameOver();
  }
})



arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));
generateLogs('start', player1, player2);
