import createElement from './createElement'

export default function createPlayer({ id, hp, name, img}) {

    const player = createElement('div', 'player' + id);
    const lifeEl = createElement('div', 'life');
    const nameEl = createElement('div', 'name', name);
    const imgEl = createElement('img');

    lifeEl.style.width = hp + "%";
    imgEl.src = img;

    const progressbar = createElement('div', 'progressbar',[lifeEl, nameEl]);
    const character = createElement('div', 'character', [imgEl]);

    player.appendChild(progressbar);
    player.appendChild(character);
    
   return player;
};
