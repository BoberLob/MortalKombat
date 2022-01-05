import { appendChild, createElement } from './domHelpers.js';
import { getLifeBarColor } from './utils.js';

class Player {
  constructor({ player, name, hp, img, rootSelector }) {
    this.player = player;
    this.name = name;
    this.hp = hp;
    this.img = img;
    this.rootSelector = document.querySelector(rootSelector);
  }

  renderPlayer = () => {
    const playerEl = createElement('div', 'player' + this.player);
    const lifeEl = createElement('div', 'life');
    const nameEl = createElement('div', 'name', this.name);
    const imgEl = createElement('img');

    lifeEl.style.width = this.hp + '%';
    imgEl.src = this.img;

    const progressbar = createElement('div', 'progressbar', [lifeEl, nameEl]);
    const character = createElement('div', 'character', [imgEl]);

    appendChild(playerEl, progressbar);
    appendChild(playerEl, character);

    return appendChild(this.rootSelector, playerEl);
  };

  elHP = () => document.querySelector('.player' + this.player + ' .life');

  changeHP = damage => {
    if (this.hp < damage) {
      this.hp = 0;
    } else {
      this.hp -= damage;
    }
  };
  renderHP = () => {
    this.elHP().style.width = this.hp + '%';
    this.elHP().style.background = getLifeBarColor(this.hp);
  };
}

export default Player;
