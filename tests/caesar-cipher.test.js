import caesarCipher from '../code/caesar-cipher';

test('One word', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza');
})

test('Multiple words', () => {
  expect(caesarCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
})

test('Symbols', () => {
  expect(caesarCipher('!@#%', 3)).toBe('!@#%');
})

test('Numbers', () => {
  expect(caesarCipher(1234, 2)).toBe('1234');
})

test('Empty string', () => {
  expect(caesarCipher('', 2)).toBe('');
})