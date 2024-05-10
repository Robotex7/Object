import Personality from './personality';

export default class Bowerman extends Personality {
  constructor(name, type = 'Bowerman') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}