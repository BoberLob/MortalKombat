import {
  appendChild,
  fightButton,
  createReloadButton,
  showResult,
} from './domHelpers.js';
import { generateLogs } from './generateLogs.js';

export const resultGame = (arenas, player1, player2) => {
  if (player1.hp === 0 || player2.hp === 0) {
    fightButton.disabled = true;
    appendChild(arenas, createReloadButton());

    if (player2.hp > 0) {
      appendChild(arenas, showResult(`${player2.name} win!`));
      generateLogs('end', player2, player1);
    }

    if (player1.hp > 0) {
      appendChild(arenas, showResult(`${player1.name} win!`));
      generateLogs('end', player1, player2);
    }

    if (player1.hp === 0 && player2.hp === 0) {
      appendChild(arenas, showResult('Nobody wins!'));
      generateLogs('draw');
    }
  }
};
