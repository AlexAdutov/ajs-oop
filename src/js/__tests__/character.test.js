import Character from '../character';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('Получим объект Character', () => {
  const description = new Character('Ivan', 'Swordsman');

  const result = {
    name: 'Ivan',
    type: 'Swordsman',
    level: 1,
    health: 100,
  };
  expect(description).toEqual(result);
});

test('Go to the next level with zero health', () => {
  const testChar = new Character('Ivan', 'Bowman', 25, 25);
  testChar.health = 0;
  expect(() => testChar.levelUp()).toThrow(
    'нельзя повысить левел умершего',
  );
});

test('Получим ошибку имени (too short)', () => {
  expect(
    () => new Character('a', 'Bowman', 100, 100),
  ).toThrow('Invalid name length');
});

test('Получим ошибку имени (too long)', () => {
  expect(
    () => new Character('SomethingStrangeName', 'Daemon', 100, 100),
  ).toThrow('Invalid name length');
});

test('New character with invalid character type', () => {
  expect(
    () => new Character('Petr', 'Tankist', 100, 100),
  ).toThrow('Type should be one of this: Bowman, Daemon, Magician, Swordsman, Undead, Zombie');
});

test('Inflict damage to character', () => {
  const testChar = new Bowman('Fedr', 'Bowman', 25, 25);
  testChar.damage(50);
  expect(testChar).toEqual({
    name: 'Fedr',
    type: 'Bowman',
    health: 62.5,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('The value of health cannot be negative', () => {
  const testChar = new Bowman('Fedr', 'Bowman', 25, 25);
  testChar.health = 0;
  testChar.damage(50);
  expect(testChar.health).toEqual(0);
});

test('Go to the next level', () => {
  const testChar = new Bowman('Fedr', 'Bowman', 25, 25);
  testChar.levelUp();
  expect(testChar).toEqual({
    name: 'Fedr',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

/*test('New Bowman', () => {
  const bowman = new Bowman('Fedr');
  expect(bowman).toEqual({
    name: 'Fedr',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});*/

/*test('New Daemon', () => {
  const daemon = new Daemon('Alex');
  expect(daemon).toEqual({
    name: 'Alex',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('New Magician', () => {
  const magician = new Magician('Sidr');
  expect(magician).toEqual({
    name: 'Sidr',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('New Swordsman', () => {
  const swordsman = new Swordsman('Ivan');
  expect(swordsman).toEqual({
    name: 'Ivan',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('New Undead', () => {
  const undead = new Undead('Vlad');
  expect(undead).toEqual({
    name: 'Vlad',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('New Zombie', () => {
  const zombie = new Zombie('Zzzz');
  expect(zombie).toEqual({
    name: 'Zzzz',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});*/
