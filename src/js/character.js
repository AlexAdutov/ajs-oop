const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type, attack, defence) {
    if (typeof name === 'string' && name.length <= 10 && name.length >= 2) {
      this.name = name;
    } else {
      throw new Error('Invalid name length');
    }

    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Type should be one of this: Bowman, Daemon, Magician, Swordsman, Undead, Zombie');
    }

    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
