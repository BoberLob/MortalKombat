import obj from '../assets/db.js';

const { fighters } = obj;

class Player {
    constructor({ player, name, hp, img }) {
        this.player = player;
        this.name = name;
        this.hp = hp;
        this.img = img;
    }

    elHP = () => document.querySelector('.player' + this.player + ' .life');
    changeHP = (damage) => {
        if (this.hp < damage) {
            this.hp = 0;
        } else {
            this.hp -= damage;
        }
    };
    renderHP = () => this.elHP().style.width = this.hp + '%';
}


 const   getRandomPlayers = async () => {
        const body =await fetch('https://reactmarathon-api.herokuapp.com/api/mk/player/choose')
          .then(res => res.json())
          .catch(err => console.log(err));
        return body;
    }

        // const pla1 = JSON.parse(localStorage.getItem('player1'));

        const p1 =fighters[0]
        const p2 =await getRandomPlayers();

export let player1 = new Player({
            ...p1,
            player: 1,
            rootSelector: 'arenas',
        });

export let player2 = new Player({
            ...p2,
            player: 2,
            rootSelector: 'arenas',
        });



