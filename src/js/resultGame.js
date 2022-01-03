import {fightButton, createReloadButton, showResult} from './domHelpers.js';
import {generateLogs} from './generateLogs.js';

export const  resultGame=(arenas, player1, player2)=> {
  if (player1.hp === 0 || player2.hp === 0) {
    fightButton.disabled = true;
    arenas.appendChild(createReloadButton());

    if (player2.hp > 0) {
      arenas.appendChild(showResult(`${player2.name} win!`));
      generateLogs('end', player2, player1);
    }

    if (player1.hp > 0) {
      arenas.appendChild(showResult(`${player1.name} win!`));
      generateLogs('end', player1, player2);
    }

    if (player1.hp === 0 && player2.hp === 0) {
      arenas.appendChild(showResult('Nobody wins!'));
      generateLogs('draw');
    }
  }
}