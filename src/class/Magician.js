import Personality from './personality';

export default class Magician extends Personality {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}