import createPlayer from './js/createPlayer'
import Player from './js/Player'
import gamers from './assets/db.json'

const $arenas = document.querySelector('.arenas');

const player1 = {
    player: 1,
    name: 'Kitana',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['brain', 'look', 'voice'],
    function attack() {
        console.log(this.name + " fight...");
    }
}
const player2 = {
    player: 2,
    name: 'Sonya',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['brain', 'look', 'voice'],
    function attack() {
        console.log(this.name + " fight...");
    }
}
const player1 = new Player(gamers[0]);
const player2 = new Player(gamers[4]);

arenas.appendChild(createPlayer(player1))
arenas.appendChild(createPlayer(player2))

// <div class="player1">
//     <div class="progressbar">
//         <div class="life"></div>
//         <div class="name">SCORPION</div>
//     </div>
//     <div class="character">
//         <img src="http://reactmarathon-api.herokuapp.com/assets/scorpion.gif" />
//     </div>
// </div>

// http://reactmarathon-api.herokuapp.com/assets/kitana.gif
// http://reactmarathon-api.herokuapp.com/assets/subzero.gif
// http://reactmarathon-api.herokuapp.com/assets/sonya.gif
// http://reactmarathon-api.herokuapp.com/assets/liukang.gif
// http://reactmarathon-api.herokuapp.com/assets/scorpion.gif
