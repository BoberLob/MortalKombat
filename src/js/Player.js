export default class Player {
    name;
    hp;
    img;
    weapon;
    count;
    // увеличиваем счётчик при каждом вызове
    
    constructor({ name, hp, img, weapon, player}) {
        this.count++ = player;
        this.name = name;
        this.hp = hp;
        this.img = img;
        this.weapon = weapon;
    }

    attack() {
        console.log(this.name + 'Fight...');
    }
}
