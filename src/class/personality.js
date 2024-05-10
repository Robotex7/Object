const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Personality {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой от 2 до 10 символов');
    } else {
      this.name = name;
    }

    if (typeof type !== 'string' || !types.includes(type)) {
      throw new Error('Ошибка');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.health = 100;
      this.attack += Math.round(this.attack * 0.2);
      this.defence += Math.round(this.defence * 0.2);
    } else {
      throw new Error('Нельзя повысить уровень умершего');
    }
  }

  damage(points) {
    if (typeof points !== 'number' || points < 0) {
      throw new Error('is not symbol or not return up and min zero');
    }

    const damageMortal = points * (1 - this.defence / 100);
    this.health -= damageMortal;

    if (this.health < 0) {
      this.health = 0;
    }
  }
}

export { types };