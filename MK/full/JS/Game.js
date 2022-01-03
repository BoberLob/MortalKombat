import { chooseActions } from "./playermoves.js";
import generateLog from "./generatelog.js";
import { appendChild, createReloadButton, showResultText } from "./domhelpers.js";
import Player from "./Player.js";
import { getRandomNumber, sleep } from "./utils.js";
import { $arenas, $fight } from "./domhelpers.js"
import { ANIMATIONS } from "./animations.js"
import { SOUNDS } from "./sounds.js"

const $audio = document.getElementById("sound");
const $music = document.getElementById("soundtrack");

let player1, player2;

class Game {
  constructor(selector, eventType) {
    this.$el = document.querySelector(selector);
    this.event = eventType;
  }

  start = async () => {
    $fight.classList.remove('hidden');
    $arenas.classList.add(`arena${getRandomNumber(6)}`);
    $music.src = SOUNDS.arenas[getRandomNumber(SOUNDS.arenas.length)]
    $music.play()
    $audio.src = SOUNDS.start
    $audio.play()
    await sleep(1300)
    $audio.src = SOUNDS.fight
    $audio.play()
    const p1 = JSON.parse(localStorage.getItem('player1'));
    const p2 = JSON.parse(localStorage.getItem('player2'));
    player1 = new Player({
      ...p1,
      player: 1,
      rootSelector: `.arenas`,
      animations: ANIMATIONS.find(animation => animation.id === p1.id)
    })
    player2 = new Player({
      ...p2,
      player: 2,
      rootSelector: `.arenas`,
      animations: ANIMATIONS.find(animation => animation.id === p2.id)
    })

    player1.createPlayer()
    player2.createPlayer()
    generateLog("start", player1, player2);
    await sleep(700)
    this.$el.classList.add('shown')
    this.$el.addEventListener(this.event, this.gameHandler);
  }

  gameHandler = async (event) => {
    event.preventDefault();
    const {
      player1: {
        value: playerValue,
        hit: playerHit,
        defence: playerDef
      },
      player2: {
        value: aiValue,
        hit: aiHit,
        defence: aiDef
      }
    } = await chooseActions();

    this.hideEl()
    player2.attack()
    if (playerDef !== aiHit) {
      player1.gotHit()
      $audio.src = SOUNDS.hits[getRandomNumber(SOUNDS.hits.length)]
      $audio.play()
      await sleep(100)
      player1.changeHP(aiValue);
      player1.renderHP();
      generateLog("hit", player2, player1, aiValue);
    } else {
      player1.block()
      $audio.src = SOUNDS.block
      $audio.play()
      await sleep(100)
      generateLog("defence", player2, player1);
    }
    await sleep(800)
    player1.attack()
    if (aiDef !== playerHit) {
      player2.gotHit()
      $audio.src = SOUNDS.hits[getRandomNumber(SOUNDS.hits.length)]
      $audio.play()
      await sleep(100)
      player2.changeHP(playerValue);
      player2.renderHP();
      generateLog("hit", player1, player2, playerValue);
    } else {
      player2.block()
      $audio.src = SOUNDS.block
      $audio.play()
      await sleep(100)
      generateLog("defence", player1, player2);
    }
    await sleep(550)
    this.showEl()
    if (player1.hp === 0 || player2.hp === 0) {
      createReloadButton();
      this.$el.style.display = "none";
    }
    if (player1.hp === 0 && player1.hp < player2.hp) {
      generateLog("end", player2, player1);
      player2.victory();
      player1.defeat();
      $audio.src = SOUNDS.lose[getRandomNumber(SOUNDS.lose.length)]
      $audio.play()
      await sleep(300)
      appendChild($arenas, showResultText(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
      generateLog("end", player1, player2);
      player1.victory();
      player2.defeat();
      $audio.src = SOUNDS.victory[getRandomNumber(SOUNDS.victory.length)]
      $audio.play()
      await sleep(300)
      appendChild($arenas, showResultText(player1.name));
    } else if (player1.hp === 0 && player2.hp === 0) {
      generateLog("draw");
      player1.defeat();
      player2.defeat();
      $audio.src = SOUNDS.draw
      $audio.play()
      await sleep(300)
      appendChild($arenas, showResultText());
    }
  }

  hideEl = () => this.$el.classList.remove('shown');

  showEl = () => this.$el.classList.add('shown')

  get element() { return this.$el }
}

export default Game;