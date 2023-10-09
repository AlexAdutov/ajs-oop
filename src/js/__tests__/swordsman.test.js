import Swordsman from "../swordsman";

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
