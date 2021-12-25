export default class Player {
    id;
    name;
    hp;
    img;
    weapon;
    
    
    constructor({id, name, hp, img, weapon}) {
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
