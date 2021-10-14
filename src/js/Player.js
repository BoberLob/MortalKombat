export default class Player {
    name;
    hp;
    img;
    weapon;
    constructor({ name, hp, img, weapon }) {
        this.name = name;
        this.hp = hp;
        this.img = img;
        this.weapon = weapon;
    }

    attack() {
        console.log(this.name + 'Fight...');
    }
};
