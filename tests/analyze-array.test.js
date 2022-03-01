import analyzeArray from '../code/analyze-array';

test('Normal numbers', () => {
  expect(analyzeArray([1, 2, 3, 4])).toEqual({average: 2.5, min: 1, max: 4, length: 4});
});

test('Numbers as strings', () => {
  expect(analyzeArray(['1', '2', '3', '4'])).toEqual({average: 2.5, min: 1, max: 4, length: 4});
});

test('Not numbers', () => {
  expect(() => {
    analyzeArray(['s', null, undefined, 32]);
  }).toThrow(Error);
});

test('Empty array', () => {
  expect(() => {
    analyzeArray([]);
  }).toThrow(Error);
});

test('Not array', () => {
  expect(() => {
    analyzeArray(3);
  }).toThrow(Error);
});