import Zombie from '../class/Zombie';

test('Тест дефолтного перса', () => {
  const pers = new Zombie('igor', 'Zombie');
  const correct = {
    name: 'igor',
    type: 'Zombie',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(pers).toEqual(correct);
});

describe('Zombie class', () => {
  it('should create a new Zombie instance', () => {
    const zombie = new Zombie('Zombie1');

    zombie.attack = 25;
    zombie.defence = 25;

    const expected = {
      name: 'Zombie1',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };

    expect(zombie).toEqual(expected);
  });
});