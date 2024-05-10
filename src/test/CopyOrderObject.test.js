import CopyOrderObject from '../object/CopyOrderObject';
import Swordsman from '../class/Swordsman';

test('test defold copy object', () => {
  const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  const mySwordsman = new Swordsman('Arthur');
  mySwordsman.attack = 70;
  mySwordsman.defence = 25;

  const newSwordsman = CopyOrderObject(mySwordsman, types);

  const result = [
    { key: 'attack', value: 70 },
    { key: 'defence', value: 25 },
    { key: 'health', value: 100 },
    { key: 'level', value: 1 },
    { key: 'name', value: 'Arthur' },
    { key: 'type', value: 'Swordsman' },
  ];

  expect(newSwordsman).toEqual(result);
});

test('testing arrey and sorting it', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(CopyOrderObject(obj, ['name', 'level'])).toEqual(result);
});