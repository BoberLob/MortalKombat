import createElement from './createElement.js'

export default function createPlayer(fighters) {

    const player = createElement('div', 'player' + fighters.id);
    const progressbar = createElement('div', 'progressbar');
    const character = createElement('div', 'character');
    const life = createElement('div', 'life');
    const name = createElement('div', 'name');
    const img = createElement('img');
    
    life.style.width = fighters.hp + "%";
    name.innerText = fighters.name;
    img.src = fighters.img;

    player.appendChild(progressbar);
    player.appendChild(character);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    character.appendChild(img);
    
   return player;
};
