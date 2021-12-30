
/**
 * @param {string} tag
 * @param {string} className
 * @param {string|array} content
 * @returns {HTMLDivElement} create
 */
export  function createElement(tag = 'div', className, content) {
  const el = document.createElement(tag);
  if (className) {
    el.classList.add(className);
  }

  if ( typeof content==='string'){
    el.innerText = content;
  }

  if (Array.isArray(content)) {
    content.forEach((item) => el.appendChild(item));
  }
  return el;
}

/**
 * @param {number} number
 * @returns {number} random 1...number
 */
export function getRandom(number) {
  return Math.ceil(Math.random() * number);
}

/**
 * @param {number} time (<= 59)
 * @returns {string|*} '01'...'09' or time
 */

function generateTimeString(time) {
  return time < 10 ? `0${time}` : time;
}

/**
 * @returns {string} time in format HH:MM:SS
 */
export  function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${generateTimeString(hours)}:${generateTimeString(minutes)}:${generateTimeString(seconds)}`;
}

