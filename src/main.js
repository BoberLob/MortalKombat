const player1 = {
    name: 'Kitana',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['brain', 'look', 'voice'],
    function attack() {
        console.log(this.name + "fight...");
    }
}
const player2 = {
    name: 'Sonya',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['brain', 'look', 'voice'],
    function attack() {
        console.log(name + "fight...");
    }
}

function createPlayer(playerName,obj) {
    const $player = document.createElement('div');
    $player.classList.add(playerName);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = obj.hr + "%";

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = obj.name;
    
    const $img = document.createElement('img');
    $img.src = obj.img;

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    const arenas = document.querySelector('.arenas')
    arenas.appendChild($player)

};

createPlayer('player1', player1);
createPlayer('player2', player2);

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
