const operations = require('../operations')

test('adds 1 + 2 to equal 3', () => {
    expect(operations.sum(1, 2)).toBe(3);
  });

  test('6 / 2 to equal 3', () => {
    expect(operations.div(6, 2)).toBe(3);
  });