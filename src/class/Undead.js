import Personality from './personality';

export default class Undead extends Personality {
  constructor(name, type = 'Undead') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}