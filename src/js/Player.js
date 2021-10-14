export default class Player {
    name;
    hp;
    img;
    weapon;
    count;
    
    
    constructor({ name, hp, img, weapon, player}) {
        // увеличиваем счётчик при каждом вызове
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
