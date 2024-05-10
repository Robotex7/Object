import Undead from '../class/Undead';

test('Тест дефолтного перса', () => {
  const pers = new Undead('igor', 'Undead');
  const correct = {
    name: 'igor',
    type: 'Undead',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(pers).toEqual(correct);
});

describe('Undead class', () => {
  it('should create a new Undead instance', () => {
    const undead = new Undead('Undead1');

    Undead.attack = 25;
    Undead.defence = 25;

    const expected = {
      name: 'Undead1',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };

    expect(undead).toEqual(expected);
  });
});