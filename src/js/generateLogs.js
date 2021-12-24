import { LOGS } from './constans';
import getTime from './getTime';
import getRandom from './getRandom';

const chat = document.querySelector('.chat');

export default function generateLogs(type, player1, player2, damage = 0) {
  const time = getTime();

  let logMessage =type.includes('start','draw')
    ? LOGS[type]
   :LOGS[getRandom(LOGS[type].length - 1)]

  switch (type) {
    case 'start':
      logMessage
        .replace('[time]', time)
        .replace('[player1]', player1.name)
        .replace('[player2]', player2.name);
      break;
    case 'end':
      logMessage = `${time} - ${logMessage}`
        .replace('[playerWin]', player1.name)
        .replace('[playerLose]', player2.name);
      break;
    case 'hit':
      logMessage = `${time} - ${logMessage} -${damage} [${player2.hp}/100]`
        .replace('[playerKick]', player1.name)
        .replace('[playerDefence]', player2.name);
      break;
    case 'defence':
      logMessage = `${time} - ${logMessage}`
        .replace('[playerDefence]', player1.name)
        .replace('[playerKick]', player2.name);
      break;
    case 'draw':
      logMessage = '${time} - ${logMessage}';
      break;
    default:
      return logMessage = '';

  }
  chat.insertAdjacentHTML('afterbegin', `<p>${logMessage}<p>`);
}