import Bowman from '../bowman';

test('New Bowman', () => {
  const bowman = new Bowman('Fedr', 'Bowman');
  expect(bowman).toEqual({
    name: 'Fedr',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
