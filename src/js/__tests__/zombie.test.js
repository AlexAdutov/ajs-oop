import Zombie from "../zombie";

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
});
