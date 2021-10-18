import createPlayer from './js/createPlayer'
import Player from './js/Player'
import gamers from './assets/db.json'

const $arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');

const player1 = new Player(gamers[0]);
const player2 = new Player(gamers[4]);

function playerWin(name) {
    const winTitle = createElem('div', 'loseTitle');
    winTitle.innerHTML = `${name} win!`;
    return winTitle;
}

function gameOver() {
    if (player1.hp < 0 && player2.hp > 0) {
        player1.hp = 0;
        randomButton.disabled = true;
        arenas.appendChild(playerWin(player2.name));
    }
    if (player1.hp > 0 && player2.hp < 0) {
        player2.hp = 0;
        randomButton.disabled = true;
        arenas.appendChild(playerWin(player1.name));
    }
    if (player1.hp < 0 && player2.hp < 0) {
        let nobody = 'Nobody wins!';
        player1.hp = 0;
        player2.hp = 0;
        randomButton.disabled = true;
        arenas.appendChild(playerWin(nobody));
    }
}

function changePlayer(player) {
    const playerLife = document.querySelector(`.player${player.playerNumber} .life`);
    player.hp -= Math.ceil(Math.random() * 20);
    playerLife.style.width = player.hp <= 0 ? `0%` : `${player.hp}%`;
    if (player.hp < 0) {
        gameOver();
    }

}

randomButton.addEventListener('click', () => {
    changePlayer(player1);
    changePlayer(player2);
});

arenas.appendChild(createPlayer(player2))
arenas.appendChild(createPlayer(player1))

// 1. Функция changeHP должна в аргументах принимать, на какое кол-во надо изменять HP. И решать, нужно ли отнимать или ставить 0. Больше ничего эта функция не должна делать.
// поменять параметр
// убедиться, что функция в объекте (по this имеет доступ к инстансу)
