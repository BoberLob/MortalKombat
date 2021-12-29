import Player from './js/Player.js'
import obj from './assets/db.js'
import createPlayer from './js/createPlayer.js'
import createElem from './js/createElem.js'
const {fighters} =obj
const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');

const player1 = new Player(fighters[0]);
const player2 = new Player(fighters[1]);

function playerWin(name) {
    const $winTitle = createElem('div', 'winTitle');
    $winTitle.innerHTML = `${name} win!`;
    return $winTitle;
}

function gameOver() {
    if (player2.hp > 0) {
        arenas.appendChild(playerWin(player2.name));
    }
    if (player1.hp > 0) {
        arenas.appendChild(playerWin(player1.name));
    }
    if (player1.hp === 0 && player2.hp === 0) {
        const nobody = 'Nobody';
        arenas.appendChild(playerWin(nobody));
    }
}

function renderHP() {
const $playerLife = document.querySelector(`.player${this.id} .life`);
return $playerLife.style.width = `${this.hp}%`;
}

function changeHP(damage) {
    this.hp -= getRandom(damage);
    if (this.hp <= 0) this.hp = 0;
    console.log(`###: ${this.name} = ${this.hp}%`)
    return this.hp
}

function getRandom(hp) {
    return Math.ceil(Math.random() * hp)
}

randomButton.addEventListener('click', () => {
   console.log("####: Click Random Button");

  let player1HP = changeHP.call(player1,20);
       renderHP.call(player1)
  let player2HP = changeHP.call(player2,20);
       renderHP.call(player2)

        if (player1HP === 0 || player2HP === 0 ) {
        randomButton.disabled = true;
          gameOver();
    }
});

arenas.appendChild(createPlayer(player1))
arenas.appendChild(createPlayer(player2))

// 1. Функция changeHP должна в аргументах принимать, на какое кол-во надо изменять HP. И решать, нужно ли отнимать или ставить 0. Больше ничего эта функция не должна делать.
// поменять параметр
// убедиться, что функция в объекте (по this имеет доступ к инстансу)
