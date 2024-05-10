import Personality from './personality';

export default class Zombie extends Personality {
  constructor(name, type = 'Zombie') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}