import Player from './js/Player';
import createPlayer from './js/createPlayer';
import createElement from './js/createElement';
import getRandom from './js/getRandom';

import fighters from './assets/db.json';

const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');

const player1 = new Player(fighters[0]);
const player2 = new Player(fighters[4]);

function playerWin() {
  const winTitle = createElement('div', 'loseTitle');
  winTitle.innerHTML = `{name} win!`;
  return winTitle;
}

function gameOver() {
  if (player1.hp < 0 && player2.hp > 0) {
    player1.hp = 0;
    arenas.appendChild(playerWin(player2.name));
  }
  if (player1.hp > 0 && player2.hp < 0) {
    player2.hp = 0;
    arenas.appendChild(playerWin(player1.name));
  }
  if (player1.hp < 0 && player2.hp < 0) {
    let nobody = 'Nobody wins!';
    player1.hp = 0;
    player2.hp = 0;
    arenas.appendChild(playerWin(nobody));
  }
}

randomButton.addEventListener('click', () => {
  console.log('####: Click Random Button');

  let player1HP = player1.changeHP(getRandom(20));
  player1.renderHP();
  let player2HP = player2.changeHP(getRandom(20));
  player2.renderHP();

  if (player1HP === 0 || player2HP === 0) {
    randomButton.disabled = true;
    const reloadButton= createReloadButton()
    reloadButton.addEventListener('click', function() {
      window.location.reload()
    })
    arenas.appendChild(reloadButton)
    gameOver();
  }
});

function createReloadButton(){
  const reloadWrap=createElement('div', 'reloadWrap')
    const reloadButton=createElement('button', 'button')
      reloadButton.innerHTML='Restart'
      reloadWrap.appendChild(reloadButton)
return reloadWrap
}
arenas.appendChild(createPlayer(player2));
arenas.appendChild(createPlayer(player1));


