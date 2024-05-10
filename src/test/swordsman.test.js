import Swordsman from '../class/Swordsman';

test('Тест дефолтного перса', () => {
  const pers = new Swordsman('igor', 'Swordsman');
  const correct = {
    name: 'igor',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(pers).toEqual(correct);
});

describe('Swordsman class', () => {
  it('should create a new Swordsman instance', () => {
    const swordsman = new Swordsman('Swordsman1');

    Swordsman.attack = 40;
    Swordsman.defence = 10;

    const expected = {
      name: 'Swordsman1',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };

    expect(swordsman).toEqual(expected);
  });
});

test('should reduce health based on points and defence on damage', () => {
  const swordsmanCharacter = new Swordsman('Swordsman1');
  const initialHealth = swordsmanCharacter.health;
  const damageAmount = 30;
  const expectedHealth = initialHealth - damageAmount * (1 - swordsmanCharacter.defence / 100);
  swordsmanCharacter.damage(damageAmount);

  expect(swordsmanCharacter.health).toBeCloseTo(expectedHealth, 0);
});