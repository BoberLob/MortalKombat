import { LOGS } from './constans.js';
import { getTime, getRandom } from '../utils/index.js';
import { chat } from './domHelpers.js';

let logMessage;
/**
 *
 * @param type
 * @param player1
 * @param player2
 * @param damage
 * @returns {string}
 */
export const generateLogs = (type, player1, player2, damage = 0) => {

  const time = getTime();

  const log = type.includes('start', 'draw')
    ? LOGS[type]
    : LOGS[type][getRandom(LOGS[type].length - 1)];

  switch (type) {
    case 'start':
      logMessage = log
        .replace('[time]', `${time}`)
        .replace('[player1]', player1.name)
        .replace('[player2]', player2.name);
      break;
    case 'end':
      logMessage = `${time} - ${log}`
        .replace('[playerWins]', player1.name)
        .replace('[playerLose]', player2.name);
      break;
    case 'hit':
      logMessage = `${time} - ${log} -${damage} [${player2.hp}/100]`
        .replace('[playerKick]', player1.name)
        .replace('[playerDefence]', player2.name);
      break;
    case 'defence':
      logMessage = `${time} - ${log}`
        .replace('[playerDefence]', player1.name)
        .replace('[playerKick]', player2.name);
      break;
    case 'draw':
      logMessage = `${time} - ${log}`;
      break;
    default:
      return logMessage = '';

  }

  chat.insertAdjacentHTML('afterbegin', `<p>${logMessage}<p>`);
};