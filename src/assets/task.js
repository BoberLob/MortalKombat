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
<div class="player1">
    <div class="progressbar">
        <div class="life"></div>
        <div class="name">SCORPION</div>
    </div>
    <div class="character">
        <img src="http://reactmarathon-api.herokuapp.com/assets/scorpion.gif" />
    </div>
</div>