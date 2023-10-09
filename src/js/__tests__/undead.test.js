import Undead from "../undead";

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
