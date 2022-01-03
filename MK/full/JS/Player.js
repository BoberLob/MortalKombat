import { createElement, appendChild } from "./domhelpers.js";
import { getRandomNumber, sleep } from "./utils.js";

class Player {
  constructor({ name, player, img, hp, rootSelector, animations }) {
    this.name = name;
    this.player = player;
    this.img = img;
    this.hp = hp;
    this.rootSelector = document.querySelector(rootSelector);
    this.animations = animations;
    this.$image = null;
    this.$character = null;
  }
  createPlayer = () => {
    const $player = createElement("div", `player${this.player}`);

    const $progressBar = createElement("div", "progressbar");

    const $character = createElement("div", "character");

    appendChild($player, $progressBar);
    appendChild($player, $character);
    this.$character = $character;

    const $life = createElement("div", "life");
    $life.style.width = `${this.hp}%`;

    const $name = createElement("div", "name");
    $name.innerText = this.name;

    appendChild($progressBar, $life);
    appendChild($progressBar, $name);

    const $img = createElement("img");
    $img.src = this.img;
    $img.alt = `${this.name} GIF Image`;
    this.imageNode = $img;

    appendChild($character, $img);
    return appendChild(this.rootSelector, $player);
  }

  set imageNode(imageNode) {
    return this.$image = imageNode;
  }
  get imageNode() {
    return this.$image;
  }

  changeHP = hpAmount => this.hp >= hpAmount ? this.hp -= hpAmount : this.hp = 0;

  elHP = () => document.querySelector(`.player${this.player} .life`);

  renderHP = () => this.elHP().style.width = `${this.hp}%`;

  attack = async () => {
    this.$character.classList.add('attack');
    await sleep(220)
    this.$image.src = this.animations.attack[getRandomNumber(this.animations.attack.length)]
    await sleep(450)
    this.$character.classList.remove('attack');
    return this.$image.src = this.img
  };

  gotHit = async () => {
    await sleep(270)
    this.$image.src = this.animations.hit;
    await sleep(430)
    return this.$image.src = this.img;
  };

  block = async () => {
    await sleep(270)
    this.$image.src = this.animations.block;
    await sleep(430)
    return this.$image.src = this.img;
  }

  victory = async () => {
    await sleep(550)
    return this.$image.src = this.animations.victory;
  };

  defeat = async () => {
    await sleep(550)
    return this.$image.src = this.animations.defeat;
  }
}

export default Player;