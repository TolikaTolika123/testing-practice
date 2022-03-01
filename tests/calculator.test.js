import calculator from '../code/calculator';

// Adding

test('Adding integers', () => {
  expect(calculator.add(1, 2)).toBe(3);
})

test('Adding negative numberse', () => {
  expect(calculator.add(-3, -2)).toBe(-5);
})

test('Adding decimal point numbers', () => {
  expect(calculator.add(1.3, 2.2)).toBeCloseTo(3.5);
})

// Subtracting

test('Subtracting integers', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
})

test('Subtracting negative numbers', () => {
  expect(calculator.subtract(-6, -3)).toBe(-3);
})

test('Subtracting decimal point numbers', () => {
  expect(calculator.subtract(5.3, 6.2)).toBeCloseTo(-0.9);
})

// Multipling

test('Multipling integers', () => {
  expect(calculator.multiply(5, 6)).toBe(30);
})

test('Multipling negative numbers', () => {
  expect(calculator.multiply(-5, -6)).toBe(30);
})

test('Multipling decimal point numbers', () => {
  expect(calculator.multiply(5.5, 6.2)).toBeCloseTo(34.1);
})

// Dividing

test('Dividing integers', () => {
  expect(calculator.divide(6, 3)).toBe(2);
})

test('Dividing negative numbers', () => {
  expect(calculator.divide(-6, -3)).toBe(2);
})

test('Dividing decimal point', () => {
  expect(calculator.divide(6.6, 3.3)).toBeCloseTo(2);
})

test('Dividing by 0', () => {
  expect(() => {
    calculator.divide(6, 0)
  }).toThrow('Cannot divide by 0');
})

// Other

test('Not numbers', () => {
  expect(() => {
    calculator.add('b', null)
  }).toThrow(Error)
})