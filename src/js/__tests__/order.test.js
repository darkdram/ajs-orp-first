import orderByProps from '../order';

test('should order', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

  let result = orderByProps(obj, ["name", "level"]);

  expect(result.length).toBe(5);
  expect(result[0].key).toBe('name')
  expect(result[1].key).toBe('level')
  expect(result[2].key).toBe('attack')
  expect(result[3].key).toBe('defence')
  expect(result[4].key).toBe('health')
});
