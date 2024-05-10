import Bowerman from '../class/bowerman';

test('Проверка дефолтного перса', () => {
  const pers = new Bowerman('igor', 'Bowerman');
  const correct = {
    name: 'igor',
    type: 'Bowerman',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };

  expect(pers).toEqual(correct);
});

describe('Bowerman class', () => {
  it('should create a new Bowerman instance', () => {
    const bowerman = new Bowerman('Bowerman1');

    Bowerman.attack = 25;
    Bowerman.defence = 25;

    const expected = {
      name: 'Bowerman1',
      type: 'Bowerman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };

    expect(bowerman).toEqual(expected);
  });
});