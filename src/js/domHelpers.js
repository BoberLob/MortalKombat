export const arenas = document.querySelector('.arenas');
export const fightButton = document.querySelector('.button');
export const formFight = document.querySelector('.control');
export const chat = document.querySelector('.chat');
/**
 *
 * @param {*} parent
 * @param {*} child
 * @returns
 */
export const appendChild = (parent, child) => parent.appendChild(child);

/**
 * @param {string} tag
 * @param {string} className
 * @param {string|array} content
 * @returns {HTMLDivElement} create
 */
export const createElement = (tag = 'div', className, content) => {
  const el = document.createElement(tag);
  if (className) {
    el.classList.add(className);
  }

  if (typeof content === 'string') {
    el.innerText = content;
  }

  if (Array.isArray(content)) {
    content.forEach(item => appendChild(el, item));
  }
  return el;
};

/**
 *
 * @param tag
 * @returns {*}
 */
const removeArena = tag => arenas.removeChild(document.querySelector(tag));
/**
 *
 * @returns {HTMLDivElement} create
 */
export const createReloadButton = () => {
  removeArena('.control');
  const reloadButton = createElement('button', 'button', 'Restart');
  const reloadWrap = createElement('div', 'reloadWrap', [reloadButton]);

  reloadButton.addEventListener('click', () => {
    window.location.reload();
    // window.location.pathname = 'index.html';
  });
  return reloadWrap;
};

/**
 *
 * @param name
 * @returns {HTMLDivElement} create
 */
export const showResult = name => createElement('div', 'winTitle', name);
