import Daemon from "../daemon";

test('New Daemon', () => {
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
