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

function createElem(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(playerObj) {
    
    const $player = createElem('div', 'player' + playerObj.player);
    const $progressbar = createElem('div', 'progressbar');
    const $character = createElem('div', 'character');
    const $life = createElem('div', 'life');
    const $name = createElem('div', 'name');
    const $img = createElem('img');
    
    $life.style.width = playerObj.hr + "%";
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    
   return $player;
};



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
