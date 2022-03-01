import reverseString from '../code/reverse-string';

test('One word', () => {
 expect(reverseString('String')).toBe('gnirtS')
})

test('Multiple words', () => {
  expect(reverseString('multiple strings')).toBe('sgnirts elpitlum')
})

test('Empty string', () => {
  expect(reverseString('')).toBe('');
})

test('Not string', () => {
  expect(reverseString(5)).toBe('');
})