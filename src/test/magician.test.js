import Magician from '../class/Magician';

test('Тест дефолтного перса', () => {
  const pers = new Magician('igor', 'Magician');
  const correct = {
    name: 'igor',
    type: 'Magician',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };
  expect(pers).toEqual(correct);
});

describe('Magician class', () => {
  it('should create a new Magician instance', () => {
    const magician = new Magician('Magician1');

    Magician.attack = 10;
    Magician.defence = 40;

    const expected = {
      name: 'Magician1',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };

    expect(magician).toEqual(expected);
  });
});