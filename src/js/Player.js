export default class Player {
    id;
    name;
    hp;
    img;
    weapon;
    count;
    
    
    constructor({id, name, hp, img, weapon, player}) {
        // увеличиваем счётчик при каждом вызове
        this.id = id;
        this.name = name;
        this.hp = hp;
        this.img = img;
        this.weapon = weapon;
    }

    attack() {
        console.log(this.name + 'Fight...');
    }
}
