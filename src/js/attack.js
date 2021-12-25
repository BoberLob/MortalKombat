import getRandom from './getRandom.js';
import { ATTACK, HIT } from './constans.js';
import Random from './getRandom.js';

// Эта функция должна выбирать один из трех элементов из переменной ATTACK, которая рандомным способом при помощи функции `getRandom()` выбирает, куда мы будем бить, это записываем в переменную hit, и что будем защищать, это записываем в переменную defence.
// Из функции надо вернуть объект с тремя полями, value (рандомно выбираем число жизней, на которое нанесем урон, используем для этого объект HIT), hit и defence
const enemyAttack = () => {
  const length = ATTACK.length - 1;
  const hit = ATTACK[Random(length)];
  const defence = ATTACK[Random(length)];
  return {
    value: Random(HIT[hit]),
    hit,
    defence,

  };
};

const playerAttack = (formFight) => {
  const attack = {
    value: 0,
    hit: '',
    defence: '',
  };

  for (let item of formFight) {
    if (item.checked && item.name === 'hit') {
      attack.value = getRandom(HIT[item.value]);
      attack.hit = item.value;
    }

    if (item.checked && item.name === 'defence') {
      attack.defence = item.value;
    }

    item.checked = false;
  }

  return attack;
};
export { playerAttack, enemyAttack };