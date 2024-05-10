import Personality from './personality';

export default class Daemon extends Personality {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}