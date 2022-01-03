import { createElement } from './domHelpers.js'

export const  renderPlayer=({ hp, img, name,  player })=> {

    const playerEl = createElement('div', 'player' + player);
    const lifeEl = createElement('div', 'life');
    const nameEl = createElement('div', 'name', name);
    const imgEl = createElement('img');

    lifeEl.style.width = hp + "%";
    imgEl.src = img;

    const progressbar = createElement('div', 'progressbar',[lifeEl, nameEl]);
    const character = createElement('div', 'character', [imgEl]);

    playerEl.appendChild(progressbar);
    playerEl.appendChild(character);
    
   return playerEl;
};
