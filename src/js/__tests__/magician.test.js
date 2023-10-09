import Magician from "../magician";

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
