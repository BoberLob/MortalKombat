
export default class Player {
    id;
    name;
    hp;
    img;
    weapon;

    constructor({ id, name, hp, img, weapon }) {
        this.id = id;
        this.name = name;
        this.hp = hp;
        this.img = img;
        this.weapon = weapon;
    }

    elHP() {
        return document.querySelector(`.player${this.id} .life`);
    }

    // Третья функци renderHP должна только рендерить hp, т.е. рисовать hp при помощи style.width.
    renderHP() {
        return this.elHP().style.width = `${this.hp}%`;
    }

// Функция changeHP должна в аргументах принимать, на какое кол-во надо изменять HP.
// И решать, нужно ли отнимать или ставить 0. Больше ничего эта функция не должна делать.
// поменять параметр и убедиться, что функция в объекте (по this имеет доступ к инстансу)
    changeHP(damage) {
        this.hp -= damage;
        if (this.hp <= 0) this.hp = 0;
        console.log(`###: ${this.name} = ${this.hp}%`);
        return this.hp;
    }


}

