import Daemon from '../class/Daemon';

test('Тест дефолтного перса', () => {
  const pers = new Daemon('igor', 'Daemon');
  const correct = {
    name: 'igor',
    type: 'Daemon',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };
  expect(pers).toEqual(correct);
});

describe('Daemon class', () => {
  it('should create a new Daemon instance', () => {
    try {
      const daemon = new Daemon('Daemon1');

      Daemon.attack = 10;
      Daemon.defence = 40;

      const expected = {
        name: 'Daemon1',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
      };

      expect(daemon).toEqual(expected);
    } catch (error) {
      Error(error);
    }
  });
  it('should throw an error if name is less than 2 symbols or greater than 10 symbols', () => {
    expect(() => new Daemon('D', 'Daemon')).toThrowError('Имя должно быть строкой от 2 до 10 символов');
    expect(() => new Daemon('ThisIsVeryLongName', 'Daemon')).toThrowError('Имя должно быть строкой от 2 до 10 символов');
  });

  it('should throw an error if type is not valid', () => {
    expect(() => new Daemon('Daemon1', 'InvalidType')).toThrowError('Ошибка');
  });
});