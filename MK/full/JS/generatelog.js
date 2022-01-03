import { LOGS } from "./constants.js";
import { getTime, getRandomNumber, getLifeBarColor } from "./utils.js";
import { $chat } from "./domhelpers.js";

const shield = "./assets/shield.png";
const swords = "./assets/swords.png"

const generateLog = (type, playerOne = {}, playerTwo = {}, damage = 0) => {
  const { name: playerOneName } = playerOne;
  const { name: playerTwoName, hp: playerTwoHp } = playerTwo;
  const color = playerTwoHp === 0 ? "red" : getLifeBarColor(playerTwoHp);
  const logTypeLength =
    typeof LOGS[type] !== "string" ? LOGS[type].length - 1 : 0;
  let text = logTypeLength
    ? LOGS[type][getRandomNumber(logTypeLength)]
    : LOGS[type];
  switch (type) {
    case "start":
      text = `${text
        .replace("[time]", getTime())
        .replace("[player1]", playerOneName)
        .replace("[player2]", playerTwoName)}`;
      break
    case "end":
      text = `${text
        .replace("[playerWins]", playerOneName)
        .replace("[playerLose]", playerTwoName)}`;
      break
    case "hit":
      text = `<img src=${swords} alt="swords"/> ${getTime()} ─ ${text
        .replace("[playerKick]", `<span class="attacker">${playerOneName}</span>`)
        .replace("[playerDefence]", `<span class="defender">${playerTwoName}</span>`)} -${damage}hp <span class="hp ${color}">[${playerTwoHp}/100]</span>`;
      break;
    case "defence":
      text = `<img src=${shield} alt="shield"/> ${getTime()} ─ ${text
        .replace("[playerKick]", `<span class="attacker">${playerOneName}</span>`)
        .replace("[playerDefence]", `<span class="defender">${playerTwoName}</span>`)} <span class="hp ${color}">[${playerTwoHp}/100]</span>`;
      break
    case "draw":
      text
      break
    default:
      return "";
  }
  const $el = `<p>${text}</p>`;
  return $chat.insertAdjacentHTML("afterbegin", $el);
}

export default generateLog;