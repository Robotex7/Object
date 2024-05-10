import Swordsman from '../class/Swordsman';

describe('test levelUp() and damage()', () => {
  it('должен повысить уровень и сбросить здоровье, атаку и защиту на levelUp()', () => {
    const swordsmanCharacter = new Swordsman('Swordsman1');
    swordsmanCharacter.levelUp();

    expect(swordsmanCharacter.level).toBe(2);
    expect(swordsmanCharacter.health).toBe(100);
    expect(swordsmanCharacter.attack).toBeCloseTo(48, 0); // Проверка на увеличение атаки на 20%
    expect(swordsmanCharacter.defence).toBeCloseTo(12, 0); // Проверка на увеличение защиты на 20%
  });

  it('должна выдаваться ошибка при попытке levelUp() мертвого персонажа', () => {
    const swordsmanCharacter = new Swordsman('Swordsman1');
    swordsmanCharacter.health = 0;
    expect(() => swordsmanCharacter.levelUp()).toThrow('Нельзя повысить уровень умершего');
  });

  it('не следует снижать работоспособность ниже 0 на damage()', () => {
    const swordsmanCharacter = new Swordsman('Swordsman1');
    swordsmanCharacter.health = 10;
    const damageAmount = 20;
    swordsmanCharacter.damage(damageAmount);

    expect(swordsmanCharacter.health).toBe(0);
  });

  it('должно выдавать ошибку, если точки не являются числом или меньше 0 на damage()', () => {
    const swordsmanCharacter = new Swordsman('Swordsman1');

    expect(() => swordsmanCharacter.damage(-10)).toThrow('не является символом или не возвращает значение up, а min равен нулю');
    expect(() => swordsmanCharacter.damage('invalid')).toThrow('не является символом или не возвращает значение up, а min равен нулю');
  });
});