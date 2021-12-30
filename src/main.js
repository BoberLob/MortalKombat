import Player from './js/Player.js';
import renderPlayer from './js/renderPlayer.js';

import generateLogs from './js/generateLogs.js';
import { playerAttack, enemyAttack } from './js/attack.js';

import gameOver from './js/resultGame.js';

import obj from './assets/db.js';

const { fighters } = obj;
const player1 = new Player(fighters[0]);
const player2 = new Player(fighters[1]);

const arenas = document.querySelector('.arenas');

const formFight = document.querySelector('.control');



const init = () => {
  formFight.addEventListener('submit', (event) => {
    event.preventDefault();

    const enemy = enemyAttack();
    const attack = playerAttack(formFight);

    console.log(attack);
    console.log(enemy);

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
      gameOver(arenas, player1, player2);

  });

  arenas.appendChild(renderPlayer(player1));
  arenas.appendChild(renderPlayer(player2));
  generateLogs('start', player1, player2);
};

init();