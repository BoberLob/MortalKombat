/**
 * @param {number} number
 * @returns {number} random 1...number
 */
export const getRandom = number => Math.ceil(Math.random() * number);

/**
 * @param {number} time (<= 59)
 * @returns {string|*} '01'...'09' or time
 */

export const generateTimeString = time => time < 10 ? `0${time}` : time;

/**
 * @returns {string} time in format HH:MM:SS
 */
export const getTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${generateTimeString(hours)}:${generateTimeString(minutes)}:${generateTimeString(seconds)}`;
};

/**
 *
 * @param ms
 * @returns {Promise<unknown>}
 */
export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

let color = '';
/**
 *
 * @param hp
 * @returns {string}
 */
export const getLifeBarColor = hp => {

  switch (!!hp) {
    case hp >= 75:
      color = 'green';
      break;
    case hp >= 50 && hp <= 74:
      color = 'yellow';
      break;
    case hp >= 25 && hp <= 49:
      color = 'orange';
      break;
    case hp <= 24:
      color = 'red';
      break;
    default:
      color = 'red';
      break;
  }
  return color;
};