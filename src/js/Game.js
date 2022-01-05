//Create players
import obj from '../assets/db.js';
import Player from './Player.js';
const { fighters } = obj;
const getRandomPlayers = async () => {
  const body = await fetch(
    'https://reactmarathon-api.herokuapp.com/api/mk/player/choose',
  )
    .then(res => res.json())
    .catch(err => console.log(err));
  return body;
};

// const pla1 = JSON.parse(localStorage.getItem('player1'));

const p1 = fighters[0];
const p2 = await getRandomPlayers();

export let player1 = new Player({
  ...p1,
  player: 1,
  rootSelector: '.arenas',
});

player1.renderPlayer();
export let player2 = new Player({
  ...p2,
  player: 2,
  rootSelector: '.arenas',
});

player2.renderPlayer();
